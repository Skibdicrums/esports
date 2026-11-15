'use strict';

const express = require('express');
const cors    = require('cors');
const fetch   = require('node-fetch');
const path    = require('path');

const app  = express();
const PORT = 8787;

// ── CORS so the HTML page at file:// or a different port can call us ──
app.use(cors());
app.use(express.json());

// ── Serve static files (the whole project folder) ──
app.use(express.static(path.join(__dirname)));

// ── Root route: serve the HTML file ──
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index (poopnew).html'));
});

// ───────────────────────────────────────────────
//  VLR.GG unofficial API helpers
//  Base: https://vlrggapi.vercel.app
// ───────────────────────────────────────────────
const VLR_API = 'https://vlrggapi.vercel.app';

const GAME_LABEL = 'VALORANT';

/**
 * Fetch a VLR endpoint with a 6-second timeout.
 */
async function vlrFetch(path) {
  const controller = new AbortController();
  const tid = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(`${VLR_API}${path}`, {
      signal: controller.signal,
      headers: { 'User-Agent': 'MetaPulse/1.0' }
    });
    if (!res.ok) throw new Error(`VLR ${path} → ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(tid);
  }
}

/**
 * Map a VLR live-match object → liveItem shape the frontend expects.
 */
function mapLiveMatch(m) {
  const r = m || {};
  return {
    kind:        'live',
    teams:       [r.team1 || 'TBD', r.team2 || 'TBD'],
    logoA:       r.flag1  || '',
    logoB:       r.flag2  || '',
    scoreA:      String(r.score1 ?? '-'),
    scoreB:      String(r.score2 ?? '-'),
    game:        GAME_LABEL,
    tournament:  r.tournament_name  || r.match_series || '',
    statusLabel: r.match_event      || 'LIVE',
    matchPage:   r.match_page       ? `https://www.vlr.gg${r.match_page}` : '',
    timeLabel:   new Date().toISOString()
  };
}

/**
 * Map a VLR upcoming-match object → scheduledItem shape the frontend expects.
 */
function mapUpcomingMatch(m) {
  const r = m || {};
  // VLR returns time as e.g. "in 2 hours" – we build a Date from eta if present
  let scheduledAt = new Date().toISOString();
  if (r.unix_timestamp) {
    scheduledAt = new Date(Number(r.unix_timestamp) * 1000).toISOString();
  }
  return {
    kind:        'upcoming',
    teams:       [r.team1 || 'TBD', r.team2 || 'TBD'],
    logoA:       r.flag1 || '',
    logoB:       r.flag2 || '',
    game:        GAME_LABEL,
    tournament:  r.tournament_name || r.match_series || '',
    statusLabel: r.match_event     || 'Upcoming',
    matchPage:   r.match_page      ? `https://www.vlr.gg${r.match_page}` : '',
    scheduledAt,
    timeLabel:   scheduledAt
  };
}

/**
 * Map a VLR results object → scheduledItem (recent) shape.
 */
function mapResultMatch(m) {
  const r = m || {};
  let playedAt = new Date().toISOString();
  if (r.unix_timestamp) {
    playedAt = new Date(Number(r.unix_timestamp) * 1000).toISOString();
  }
  return {
    kind:        'recent',
    teams:       [r.team1 || 'TBD', r.team2 || 'TBD'],
    logoA:       r.flag1 || '',
    logoB:       r.flag2 || '',
    scoreA:      String(r.score1 ?? '-'),
    scoreB:      String(r.score2 ?? '-'),
    game:        GAME_LABEL,
    tournament:  r.tournament_name || r.match_series || '',
    statusLabel: r.match_event     || 'Completed',
    matchPage:   r.match_page      ? `https://www.vlr.gg${r.match_page}` : '',
    playedAt,
    timeLabel:   playedAt
  };
}

// ── Simple in-memory cache (15 seconds) ──
let _cache = null;
let _cacheTs = 0;
const CACHE_TTL = 15_000;

async function buildSnapshot(teamName) {
  const now = Date.now();
  if (_cache && (now - _cacheTs) < CACHE_TTL) {
    return filterForTeam(_cache, teamName);
  }

  // Fetch live, upcoming, results in parallel – fall back gracefully
  const [liveData, upcomingData, resultsData] = await Promise.allSettled([
    vlrFetch('/match?q=live'),
    vlrFetch('/match?q=upcoming'),
    vlrFetch('/match?q=results')
  ]);

  const liveMatches    = liveData.status    === 'fulfilled' ? (liveData.value?.data?.segments    || []) : [];
  const upcomingMatches = upcomingData.status === 'fulfilled' ? (upcomingData.value?.data?.segments || []) : [];
  const resultMatches  = resultsData.status  === 'fulfilled' ? (resultsData.value?.data?.segments  || []) : [];

  const liveItems     = liveMatches.map(mapLiveMatch);
  const scheduledItems = [
    ...upcomingMatches.slice(0, 30).map(mapUpcomingMatch),
    ...resultMatches.slice(0, 20).map(mapResultMatch)
  ];

  _cache = { liveItems, scheduledItems, timestamp: new Date() };
  _cacheTs = now;

  return filterForTeam(_cache, teamName);
}

/**
 * If teamName is set, filter to matches containing that team (case-insensitive).
 * If teamName is falsy / "Global Feed", return everything.
 */
function filterForTeam(snapshot, teamName) {
  if (!teamName || teamName === 'Global Feed' || teamName === 'Team') {
    return { ...snapshot, teamName: 'Global Feed' };
  }
  const lower = teamName.toLowerCase();

  function matchesTeam(item) {
    if (!item || item.isHeader) return false;
    return (item.teams || []).some(t => String(t).toLowerCase().includes(lower));
  }

  return {
    liveItems:     snapshot.liveItems.filter(matchesTeam),
    scheduledItems: snapshot.scheduledItems.filter(matchesTeam),
    teamName,
    timestamp: snapshot.timestamp
  };
}

// ───────────────────────────────────────────────
//  API Routes
// ───────────────────────────────────────────────

/**
 * GET /api/matches/snapshot?teamName=...
 * Primary endpoint used by fetchBackendGamesSnapshot()
 */
app.get('/api/matches/snapshot', async (req, res) => {
  try {
    const teamName = req.query.teamName || 'Global Feed';
    const snapshot = await buildSnapshot(teamName);
    res.json({ ...snapshot, provider: 'vlrgg' });
  } catch (err) {
    console.error('matches/snapshot error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/egamers/snapshot
 * Fallback endpoint used by fetchEgamersSnapshot() – we feed the same data here
 */
app.get('/api/egamers/snapshot', async (req, res) => {
  try {
    const snapshot = await buildSnapshot('Global Feed');
    res.json({ ...snapshot, provider: 'vlrgg' });
  } catch (err) {
    console.error('egamers/snapshot error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/health
 */
app.get('/api/health', (_req, res) => res.json({ ok: true, port: PORT }));

// ───────────────────────────────────────────────
//  Start
// ───────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  MetaPulse server running → http://localhost:${PORT}`);
  console.log(`  Open: http://localhost:${PORT}/index%20(poopnew).html\n`);
});
