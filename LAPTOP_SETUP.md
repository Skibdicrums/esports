# MetaPulse Laptop Setup

Your laptop is now set up to run the server publicly via ngrok tunnel.

## Quick Start

### 1. Install ngrok
- Download from: https://ngrok.com/download
- Extract to a folder (e.g., `C:\ngrok`)
- Add the folder to your Windows PATH (so `ngrok` works in PowerShell)

### 2. Create ngrok account & auth token
- Sign up: https://ngrok.com/signup
- Get your Auth Token: https://dashboard.ngik.com/auth
- In PowerShell, run:
  ```powershell
  ngrok config add-authtoken YOUR_TOKEN_HERE
  ```

### 3. Keep the server running
The server is already running at `http://localhost:8787`

### 4. Start ngrok tunnel
In a new PowerShell window, from the `esports-main` folder:

**Option A: With custom domain (paid plan)**
```powershell
ngrok http 8787 --domain metapulse.lol
```

**Option B: Random domain (free)**
```powershell
ngrok http 8787
```

You'll see:
```
Forwarding    https://xxxx-xxxx-xxxx-xxxx.ngrok.io -> http://localhost:8787
```

### 5. Access your app
- Visit the ngrok URL shown above
- Or visit: https://metapulse.lol (if using custom domain option)

## What's happening

- **Server**: Node.js app at `http://localhost:8787` serving the app + API
- **ngrok**: Creates a public tunnel to your local server
- **Frontend**: Auto-detects the domain and uses the right API URL
- **Team lists**: Region and country team lists use Male, Female, and Academy tabs, with Male selected by default. FURIA Female and FURIA Academy are under Brazil.
- **FURIA Academy**: The supplied [Liquipedia results page](https://liquipedia.net/counterstrike/FURIA_Academy/Results) lists 13 exact first-place CS2 results. Its roster page lists no active players; msr is listed as coach.
- **FURIA Female**: The supplied [Liquipedia results page](https://liquipedia.net/counterstrike/FURIA_Female/Results) lists 41 exact first-place results; group-stage placements and shared placement ranges are excluded.
- **FURIA Counter-Strike 2**: The supplied [Liquipedia results page](https://liquipedia.net/counterstrike/FURIA/Results) lists 33 exact first-place results; group-stage standings and shared placement ranges are excluded.

## Keep it running

- Don't close the ngrok terminal – the tunnel dies when ngrok stops
- The server terminal can stay running in the background
- To make it permanent, use PM2 (see NGROK_SETUP.md for details)

## Troubleshooting

**"ngrok: command not found"**
- Make sure ngrok is in your PATH, or use the full path: `C:\ngrok\ngrok.exe http 8787`

**"Unauthorized: No account configured"**
- You need to run `ngrok config add-authtoken YOUR_TOKEN` first

**App shows old data**
- The server has a 15-second cache. Wait a moment or do a hard refresh (Ctrl+Shift+R)
- Team rosters are manually maintained snapshots in `assets/rosters.js`, not live data. Each sourced lineup shows when the source was dated or checked and a source link. Incomplete or unverified lineups are labeled, and old player names are hidden when there is no verified snapshot. Refreshing the browser does not update roster transfers.
- Sourced tournament wins are also maintained in `assets/rosters.js`. Lists for Fnatic VALORANT, Natus Vincere Counter-Strike 2, NAVI Junior Counter-Strike 2, NAVI Javelins Counter-Strike 2, Dota 2, main-team VALORANT, NAVI Junior VALORANT, NAVI Junior Mobile Legends, NAVI PH Mobile Legends, NAVI Celestials, League of Legends, Rainbow Six Siege, PUBG Mobile, PUBG (PC), and Rocket League, Team Falcons and Team Vitality Counter-Strike 2, VALORANT, Rocket League, Call of Duty: Mobile, Call of Duty: Warzone, Vitality.Bee, and Rising Bees, Twisted Minds PUBG, POWR PUBG Mobile, and FURIA Counter-Strike 2, FURIA Female Counter-Strike 2, PUBG Mobile, Rocket League, and VALORANT reflect results shown on supplied pages, not necessarily extended results. Twisted Minds' achievement badges do not provide dates and may overlap with listed results. Other clubs' achievement summaries have not yet been comprehensively verified.

**Domain not working**
- Custom domains require ngrok Pro (paid plan)
- Use a random domain for free, or point your DNS records manually

## Next Steps

- Deploy to a real VPS if you want it always-on (see nginx.conf for reference)
- Add a PM2 config to auto-restart the server if it crashes
- Set up SSL certificate with Let's Encrypt on VPS
