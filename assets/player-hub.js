// MetaPulse Esports - Shared Player Hub Functions
// Auto-generated during multi-page refactor

function normalizeTeamName(rawName) {
            return String(rawName || '')
                .replace(/\bHub\b/gi, '')
                .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '')
                .replace(/\s+/g, ' ')
                .trim();
        }

        function applyUnifiedNarrativeStyle(rawTeamName) {
            const teamName = normalizeTeamName(rawTeamName) || 'Team';
            const achievementsTitle = document.querySelector('#achievements h2');
            const historyTitle = document.querySelector('#history h2');
            const achievementsList = document.querySelector('#achievements .achievements-list');
            const historyParagraphs = document.querySelectorAll('#history p');

            if (achievementsTitle) {
                achievementsTitle.textContent = `${teamName} Achievements`;
            }
            if (historyTitle) {
                historyTitle.textContent = `${teamName} History`;
            }

            if (achievementsList) {
                const items = Array.from(achievementsList.querySelectorAll('li'))
                    .map((li) => li.textContent.replace(/\s+/g, ' ').trim())
                    .filter(Boolean)
                    .slice(0, 4);
                achievementsList.innerHTML = items.map((text) => `<li>${text}</li>`).join('');
            }

            historyParagraphs.forEach((p) => {
                const cleaned = p.textContent.replace(/\s+/g, ' ').trim();
                if (!cleaned) return;
                p.textContent = /[.!?]$/.test(cleaned) ? cleaned : `${cleaned}.`;
            });
        }

        function applyUnifiedRosterStyle(rawTeamName) {
            const teamName = normalizeTeamName(rawTeamName) || 'Team';
            const rosterTitle = document.querySelector('#roster h2');
            const gameCards = Array.from(document.querySelectorAll('#roster .game'));
            const nonGameTitleHints = [
                'organization growth',
                'content division',
                'academy & development',
                'academy and development',
                'other games'
            ];
            const unconfirmedRostersByTeam = {
                powr: ['Valorant', 'Rocket League', 'EA Sports FC'],
                twistedminds: ['Valorant', 'Overwatch 2', 'Rainbow Six Siege'],
                brightfutureesportsteam: ['League of Legends', 'Counter-Strike 2', 'Apex Legends'],
                teamfalcons: ['Dota 2', 'Valorant', 'Honor of Kings'],
                fnatic: ['Rocket League', 'PUBG: Battlegrounds'],
                ninjasinpyjamas: ['Valorant', 'Rocket League'],
                g2esports: ['Apex Legends', 'Rocket League'],
                teamheretics: ['Counter-Strike 2', 'Rocket League'],
                mouz: ['Valorant', 'Dota 2'],
                natusvincere: ['Valorant', 'Rocket League'],
                cloud9: ['Counter-Strike 2', 'Apex Legends'],
                '100thieves': ['Counter-Strike 2', 'Rocket League'],
                nrgesports: ['PUBG: Battlegrounds', 'Rocket League'],
                sentinels: ['Counter-Strike 2', 'Apex Legends'],
                t1: ['Counter-Strike 2', 'Valorant Mobile'],
                geng: ['Counter-Strike 2', 'Apex Legends'],
                edwardgaming: ['Counter-Strike 2', 'Rocket League'],
                weibogaming: ['Valorant', 'Rocket League'],
                allgamers: ['Valorant', 'Rocket League'],
                jdgaming: ['Valorant', 'Counter-Strike 2'],
                furiaesports: ['Rocket League', 'PUBG: Battlegrounds'],
                leviatan: ['Counter-Strike 2', 'Rocket League'],
                '9zteam': ['Valorant', 'Apex Legends']
            };

            if (rosterTitle) {
                rosterTitle.textContent = `${teamName} Roster`;
            }

            gameCards.forEach((card) => {
                const titleEl = card.querySelector('h3');
                const titleText = titleEl ? titleEl.textContent.replace(/\s+/g, ' ').trim().toLowerCase() : '';
                const isNonGameCard = card.classList.contains('game-note') ||
                    nonGameTitleHints.some((hint) => titleText.includes(hint));

                if (isNonGameCard) {
                    card.style.display = 'none';
                    return;
                }

                card.style.display = 'block';

                const list = card.querySelector('ul');
                if (!list) return;

                const cleanedEntries = Array.from(list.querySelectorAll('li'))
                    .map((li) => li.textContent.replace(/\s+/g, ' ').trim())
                    .filter(Boolean)
                    .slice(0, 5);

                while (cleanedEntries.length < 5) {
                    cleanedEntries.push('To Be Determined');
                }

                list.innerHTML = cleanedEntries
                    .map((entry) => (entry === 'TBD' || entry === 'To Be Determined')
                        ? '<li class="player-tbd">To Be Determined</li>'
                        : `<li>${entry}</li>`)
                    .join('');
            });

            const rosterPane = document.getElementById('roster');
            if (!rosterPane) {
                return;
            }

            let unconfirmedCard = document.getElementById('unconfirmedRostersCard');
            if (!unconfirmedCard) {
                unconfirmedCard = document.createElement('div');
                unconfirmedCard.id = 'unconfirmedRostersCard';
                unconfirmedCard.className = 'game';
                unconfirmedCard.innerHTML = `
                    <h3>⚠ Unconfirmed Rosters</h3>
                    <ul id="unconfirmedRostersList"></ul>
                `;
                rosterPane.appendChild(unconfirmedCard);
            }

            const unconfirmedList = document.getElementById('unconfirmedRostersList');
            const teamKey = playerKey(teamName);
            const unconfirmedGames = unconfirmedRostersByTeam[teamKey] || [];

            if (!unconfirmedList || unconfirmedGames.length === 0) {
                unconfirmedCard.style.display = 'none';
                return;
            }

            unconfirmedCard.style.display = 'block';
            unconfirmedList.innerHTML = unconfirmedGames
                .map((game) => `<li class="player-tbd">${game} - Roster not confirmed</li>`)
                .join('');
        }

const playerProfiles = {
            // ── T1 League of Legends ─────────────────────────────────────────
            faker: {
                achievements: [
                    '🏆 World Champion 2013, 2015, 2016, 2023 (T1/SKT)',
                    '🥇 LCK Champion 10+ times',
                    '🎖 MSI Champion 2016, 2022',
                    '🌟 4× World Champion — only player in League history',
                    '🏅 Named the greatest esports player of all time'
                ],
                history: [
                    'Lee "Faker" Sang-hyeok debuted in 2013 and immediately won the World Championship, setting the tone for the greatest career in esports history.',
                    'Over the next decade he won three more World Championships, over ten LCK domestic titles, and multiple MSI championships, cementing the T1 dynasty.',
                    'In 2023, at age 27, he won his fourth World title — the only player ever to do so — and was celebrated with a statue outside the LoL Park arena in Seoul.'
                ],
                timeline: [
                    { years: '2013–Now', team: 'SKT T1 / T1', note: 'Franchise icon — 4× World Champion, 10+ LCK titles, definitive GOAT.' }
                ]
            },
            zeus: {
                achievements: [
                    '🏆 World Champion 2023 (T1)',
                    '🥇 LCK Champion multiple times with T1',
                    '🎖 Youngest World Champion top laner at time of his win',
                    '🌟 Generational top lane talent — Faker\'s title partner'
                ],
                history: [
                    'Choi "Zeus" Woo-je debuted at Liiv SANDBOX before joining T1, where he became the cornerstone of the 2023 World Championship roster alongside Faker, Oner, Gumayusi, and Keria.',
                    'He won the World title at just 19 years old, establishing himself immediately as a generational top lane carry capable of both split-push and teamfight dominance.',
                    'His pairing with Faker across multiple seasons has become one of the most celebrated partnerships in Korean esports.'
                ],
                timeline: [
                    { years: '2021', team: 'Liiv SANDBOX', note: 'LCK debut — highly rated rookie top laner.' },
                    { years: '2022–Now', team: 'T1', note: 'World Champion 2023, LCK champion, T1 franchise top laner.' }
                ]
            },
            oner: {
                achievements: [
                    '🏆 World Champion 2023 (T1)',
                    '🥇 LCK Champion multiple times with T1',
                    '🎖 LCK MVP 2023',
                    '🌟 Most dominant Korean jungler during the championship era'
                ],
                history: [
                    'Moon "Oner" Hyeon-joon joined T1 as one of the youngest starters in the organization\'s history and won the LCK MVP award in the same year T1 won Worlds 2023.',
                    'His invade-heavy, carry-oriented jungle style creates constant pressure across the map, enabling T1\'s laners to take fights confidently with strong jungle support.',
                    'He is considered the best jungler in Korea across 2022–2024 and a top-3 jungle player globally throughout that span.'
                ],
                timeline: [
                    { years: '2021', team: 'T1 (debut)', note: 'Joined T1 as youngest starter — immediate impact.' },
                    { years: '2022–Now', team: 'T1', note: 'LCK MVP 2023, World Champion 2023.' }
                ]
            },
            gumayusi: {
                achievements: [
                    '🏆 World Champion 2023 (T1)',
                    '🥇 LCK Champion multiple times with T1',
                    '🎖 Clean mechanics — one of Korea\'s best ADCs',
                    '🌟 Graduated T1 trainee system to World Champion'
                ],
                history: [
                    'Lee "Gumayusi" Min-hyeong came through T1\'s internal trainee system to become their starting ADC, replacing the legendary Teddy and making the role his own from day one.',
                    'His pristine mechanics and consistent teamfight output were key to T1\'s 2023 World Championship run, where he performed reliably at every international stage.',
                    'He represents the next generation of T1 franchise players alongside Zeus, serving as one of the pillars for future championship rosters.'
                ],
                timeline: [
                    { years: '2020', team: 'T1 (trainee)', note: 'Internal academy development.' },
                    { years: '2021–Now', team: 'T1', note: 'World Champion 2023, starting ADC, LCK champion.' }
                ]
            },
            keria: {
                achievements: [
                    '🏆 World Champion 2023 (T1)',
                    '🥇 LCK Champion multiple times with T1',
                    '🎖 Named best support in the world multiple seasons',
                    '🌟 Regarded as the greatest support of the modern LoL era'
                ],
                history: [
                    'Ryu "Keria" Min-seok is widely regarded as the best support player in the world, having won the 2023 World Championship with T1 and dominating LCK across multiple seasons.',
                    'His champion pool covers the entire support spectrum — engage, enchanter, poke — all played at the absolute ceiling of human performance.',
                    'Alongside Faker, he has become the second most important player in T1\'s ongoing dynasty and is considered a future franchise cornerstone beyond Faker\'s career.'
                ],
                timeline: [
                    { years: '2020', team: 'DragonX (trainee/sub)', note: 'Fast-tracked to LCK due to exceptional talent.' },
                    { years: '2021–Now', team: 'T1', note: 'World Champion 2023, best support in the world.' }
                ]
            },
            // ── Gen.G League of Legends ────────────────────────────────────
            chovy: {
                achievements: [
                    '🏆 LCK Champion 2024 (Gen.G)',
                    '🥇 LCK MVP multiple seasons',
                    '🎖 Highest KDA in LCK history over multi-season span',
                    '🌟 Regarded as mechanically the best mid laner of his generation'
                ],
                history: [
                    'Jeong "Chovy" Ji-hoon is widely considered one of the greatest mechanical mid laners ever — known for impossibly clean CS numbers, solo-kill records, and zero-death performances.',
                    'For years he carried the label of "best player without a Worlds title," dominating domestically at DRX and Gen.G while international glory proved elusive.',
                    'He finally broke through domestically with Gen.G in 2024, anchoring one of Korea\'s most dominant rosters alongside champion-pedigree jungler Peanut and star ADC Peyz.'
                ],
                timeline: [
                    { years: '2018–2019', team: 'Griffin', note: 'LCK debut — instantly a mechanical marvel.' },
                    { years: '2020–2021', team: 'Hanwha Life Esports', note: 'Continued elite mid lane dominance.' },
                    { years: '2022–2023', team: 'DRX', note: 'Deep international runs, MVP candidacy.' },
                    { years: '2024–Now', team: 'Gen.G', note: 'LCK champion — with Peanut and Peyz.' }
                ]
            },
            peanut: {
                achievements: [
                    '🏆 World Champion 2016 (SKT T1)',
                    '🥇 LCK Champion with multiple organisations',
                    '🎖 LCK MVP multiple seasons',
                    '🌟 One of the longest elite jungler careers in LCK history'
                ],
                history: [
                    'Han "Peanut" Wang-ho won the 2016 World Championship alongside Faker at SKT T1, establishing himself immediately as one of Korea\'s elite junglers.',
                    'He has competed at the highest level for nearly a decade across multiple Korean and Chinese organisations, winning LCK titles and international events consistently.',
                    'At Gen.G he anchors the jungle alongside Chovy, forming the most experienced core duo in the LCK and providing veteran leadership to their championship roster.'
                ],
                timeline: [
                    { years: '2015–2016', team: 'SKT T1', note: 'World Champion 2016 alongside Faker.' },
                    { years: '2017–2021', team: 'Various (ROX, KT, NongShim, LGD)', note: 'Multi-org LCK/LPL elite journey.' },
                    { years: '2022–Now', team: 'Gen.G', note: 'LCK champion, veteran anchor alongside Chovy.' }
                ]
            },
            // ── G2 Esports LoL ────────────────────────────────────────────
            caps: {
                achievements: [
                    '🏆 LEC Champion 2019 Spring, 2022 Spring, 2022 Summer, 2023',
                    '🥇 MSI Finalist 2019, 2022',
                    '🎖 Worlds Finalist 2018 with Fnatic',
                    '🌟 Most successful European mid laner of his generation',
                    '🏅 LEC MVP — multiple seasons'
                ],
                history: [
                    'Rasmus "Caps" Winther burst onto the scene at Fnatic in 2017, earning the nickname "Baby Faker" for his fearless mid-lane aggression and solo-kill potential.',
                    'He joined G2 Esports in 2019 and became the cornerstone of Europe\'s most dominant domestic team, winning four LEC titles and reaching Worlds and MSI finals.',
                    'Widely regarded as the greatest European mid laner ever, he continues to lead G2\'s international campaigns at the highest competitive level.'
                ],
                timeline: [
                    { years: '2017–2018', team: 'Fnatic', note: 'LEC superstar debut — Worlds Finalist 2018.' },
                    { years: '2019–Now', team: 'G2 Esports', note: '4× LEC champion, MSI/Worlds Finalist, EU GOAT mid.' }
                ]
            },
            brokenblade: {
                achievements: [
                    '🏆 LEC Champion multiple seasons with G2',
                    '🥇 Multiple LEC All-Star votes as top laner',
                    '🎖 Worlds appearances with G2 Esports',
                    '🌟 Turkish-German prodigy who rose to G2\'s flagship roster'
                ],
                history: [
                    'Sergen "BrokenBlade" Çelik climbed through the EU challenger scene at Schalke 04 before a stint in the LCS with TSM, returning to Europe to join G2 Esports as their franchise top laner.',
                    'His flexibility across carry champions and tanks has been central to G2\'s domestic success, winning multiple LEC titles as the team\'s most versatile piece.',
                    'He represents the new generation of elite European top laners filling the void left after the G2 superteam era.'
                ],
                timeline: [
                    { years: '2018–2019', team: 'Schalke 04', note: 'LEC debut — immediate top-5 EU top laner.' },
                    { years: '2019–2021', team: 'TSM (LCS)', note: 'North American experience.' },
                    { years: '2022–Now', team: 'G2 Esports', note: 'LEC champion, flagship top laner.' }
                ]
            },
            yike: {
                achievements: [
                    '🏆 LEC champion with G2 Esports',
                    '🥇 Breakout LEC rookie jungler of his season',
                    '🎖 Selected for G2\'s competitive rebuild as primary jungler',
                    '🌟 Rising EU jungle talent replacing Jankos era'
                ],
                history: [
                    'Szabo "Yike" David is a French-Hungarian jungler who earned a spot on G2 Esports as one of Europe\'s brightest young jungle prospects.',
                    'His proactive, aggressive playstyle fit G2\'s high-tempo identity and helped the team transition from the Jankos era into their new roster construction.',
                    'He continues to develop as a cornerstone of G2\'s future LEC and international ambitions.'
                ],
                timeline: [
                    { years: '2022', team: 'Team BDS (academy)', note: 'EU academy standout.' },
                    { years: '2023–Now', team: 'G2 Esports', note: 'LEC jungler — Caps and BrokenBlade\'s partner.' }
                ]
            },
            hanssama: {
                achievements: [
                    '🏆 LEC Champion 2022 with Rogue',
                    '🥇 LEC All-Star ADC multiple seasons',
                    '🎖 Named best or second-best EU ADC across five seasons',
                    '🌟 One of Europe\'s best marksmen across LEC and LCS'
                ],
                history: [
                    'Steven "Hans Sama" Liv is a French ADC who established himself as one of Europe\'s elite marksmen at Rogue, winning the 2022 LEC title before joining G2 Esports.',
                    'After a stint in North America with Team Liquid, he returned to Europe to join G2 in 2024, reuniting with top European talent to pursue LEC and international glory.',
                    'His precise positioning, aggressive laning, and late-game carry ability are regarded among the highest quality in LEC history.'
                ],
                timeline: [
                    { years: '2018–2022', team: 'Rogue', note: 'LEC champion 2022, star ADC in EU.' },
                    { years: '2022–2023', team: 'Team Liquid (LCS)', note: 'NA stint.' },
                    { years: '2024–Now', team: 'G2 Esports', note: 'Return to EU — G2 ADC with Caps and Mikyx.' }
                ]
            },
            mikyx: {
                achievements: [
                    '🏆 LEC Champion multiple seasons with G2',
                    '🥇 MSI Finalist 2019 and 2022 (G2)',
                    '🎖 Worlds Finalist 2019 — Grand Final with G2',
                    '🌟 Long-time G2 veteran support — dynasty cornerstone'
                ],
                history: [
                    'Mihael "Mikyx" Mehle is a Slovenian support who has been one of G2 Esports\' most consistent performers, enduring through multiple roster generations.',
                    'He was part of the legendary 2019 G2 superteam that reached the Worlds Grand Final and the 2019 MSI Final, producing Europe\'s greatest international results in LoL history.',
                    'Despite injury setbacks that forced breaks mid-career, he has always returned to G2 as a top-tier EU support with elite playmaking and veteran championship experience.'
                ],
                timeline: [
                    { years: '2016–2017', team: 'Splyce / Misfits', note: 'LEC early career — rapid growth.' },
                    { years: '2018–Now', team: 'G2 Esports', note: 'Multiple LEC titles, Worlds/MSI Finalist.' }
                ]
            },
            // ── NiKo / m0NESY (G2 & Falcons CS2) ─────────────────────────
            niko: {
                achievements: [
                    '🏆 BLAST Premier World Final 2022 (G2 Esports)',
                    '🥇 IEM Katowice 2016 (mousesports)',
                    '🎖 HLTV.org Top-5 player seven consecutive years',
                    '🌟 Reached multiple CS:GO Major finals with FaZe Clan',
                    '🏅 Widely cited as the greatest mechanical rifler in CS history'
                ],
                history: [
                    'Nikola "NiKo" Kovač rose from the Bosnian scene through mousesports, where his rifle skill stunned the CS:GO world and earned him the reputation as the most mechanically gifted player of his generation.',
                    'He joined FaZe Clan in 2017 and reached multiple Major finals with one of the most stacked rosters in CS history, before moving to G2 Esports in 2020 where he won BLAST World Final 2022.',
                    'In 2024 he joined Team Falcons, bringing elite European CS experience to the Middle East\'s most ambitious CS project.'
                ],
                timeline: [
                    { years: '2015–2017', team: 'mousesports', note: 'CS:GO world breakthrough — HLTV top-1 candidate.' },
                    { years: '2017–2020', team: 'FaZe Clan', note: 'Multiple Major finals, global superstar.' },
                    { years: '2020–2024', team: 'G2 Esports', note: 'BLAST World Final 2022 champion.' },
                    { years: '2024–Now', team: 'Team Falcons', note: 'Flagship signing for Falcons CS2 project.' }
                ]
            },
            m0nesy: {
                achievements: [
                    '🏆 BLAST Premier World Final 2022 (G2 Esports)',
                    '🥇 HLTV Top-10 player 2022 and 2023',
                    '🎖 Multiple BLAST & IEM titles with G2',
                    '🌟 Youngest player to reach HLTV top-5 in CS:GO history'
                ],
                history: [
                    'Ilya "m0NESY" Osipov developed through NAVI Junior, showcasing AWP talent that drew comparisons to s1mple before he had ever played a Tier 1 event.',
                    'G2 Esports signed him in 2022 and he immediately became one of the world\'s best AWPers, winning BLAST World Final 2022 alongside NiKo in his first year of T1 play.',
                    'He moved to Team Falcons in 2024, forming an elite NiKo-m0NESY partnership at the apex of the Middle East CS2 scene.'
                ],
                timeline: [
                    { years: '2020–2021', team: 'NAVI Junior', note: 'Elite academy AWPer — s1mple comparisons early.' },
                    { years: '2022–2024', team: 'G2 Esports', note: 'HLTV Top-10, BLAST World Final champion.' },
                    { years: '2024–Now', team: 'Team Falcons', note: 'Star AWPer — NiKo\'s partner at Falcons.' }
                ]
            },
            // ── Vitality CS2 ──────────────────────────────────────────────
            zywoo: {
                achievements: [
                    '🏆 HLTV World #1 Player 2019, 2020, 2022, 2023',
                    '🥇 IEM Cologne 2023 Champion',
                    '🎖 ESL Pro League S14 & S17 Champion',
                    '🌟 4× HLTV #1 — tied with s1mple for most in CS history',
                    '🏅 BLAST Spring Final 2022 Champion'
                ],
                history: [
                    'Mathieu "ZywOo" Herbaut emerged from French online play and joined Team Vitality in 2019 at 18 years old, immediately winning HLTV World #1 in his debut T1 year.',
                    'He repeated as World #1 in 2020, 2022 and 2023, becoming one of only two players ever to win four #1 rankings and cementing his place alongside s1mple as an all-time great.',
                    'As the anchor of Team Vitality\'s "Super Team" era, ZywOo led them to IEM Cologne 2023, BLAST titles and ESL Pro League championships while remaining the most consistent player in Counter-Strike.'
                ],
                timeline: [
                    { years: '2019–Now', team: 'Team Vitality', note: '4× HLTV World #1 — franchise superstar and all-time great AWPer.' }
                ]
            },
            flamez: {
                achievements: [
                    '🏆 Multiple BLAST and IEM titles with Vitality',
                    '🥇 HLTV Top-20 player 2022, 2023',
                    '🎖 Most impactful Israeli player in CS history',
                    '🌟 Vitality Super Team key rifler'
                ],
                history: [
                    'Shahar "flameZ" Shushan is an Israeli rifler who joined Team Vitality\'s "Super Team" rebuild as the primary secondary star alongside ZywOo.',
                    'Known for his aggressive lurk-style play and incredible clutch sense, he consistently delivers high-impact rounds in the most important moments.',
                    'His arrival elevated Vitality\'s fragging depth significantly and he has won multiple prestigious titles as part of the super team project.'
                ],
                timeline: [
                    { years: '2020–2022', team: 'OG Esports', note: 'EU CS breakout alongside blameF.' },
                    { years: '2022–Now', team: 'Team Vitality', note: 'Super Team rifler alongside ZywOo.' }
                ]
            },
            apex: {
                achievements: [
                    '🏆 Multiple IEM and ESL Pro League titles with Vitality',
                    '🥇 French CS veteran — over 12 years at elite level',
                    '🎖 IGL for Team Vitality\'s Super Team era',
                    '🌟 One of the most experienced IGLs in Tier 1 Counter-Strike'
                ],
                history: [
                    'Dan "apEX" Madesclaire has competed at the elite level of Counter-Strike since the early CS:GO era, establishing himself as one of France\'s most passionate and energetic players.',
                    'He became Vitality\'s in-game leader for their "Super Team" rebuild, guiding a star-studded roster including ZywOo through multiple international tournament wins.',
                    'His vocal, high-energy leadership style and veteran game knowledge are central to Vitality\'s championship-winning identity.'
                ],
                timeline: [
                    { years: '2013–2015', team: 'LD Gaming / LDLC', note: 'French CS early elite career.' },
                    { years: '2015–2018', team: 'Team EnVyUs', note: 'EU CS top tier with NBK, kennyS.' },
                    { years: '2018–Now', team: 'Team Vitality', note: 'IGL — Super Team architect alongside ZywOo.' }
                ]
            },
            spinx: {
                achievements: [
                    '🏆 BLAST Premier titles with Vitality',
                    '🥇 IEM Katowice 2023 Champion (Vitality)',
                    '🎖 HLTV Top-20 player 2022, 2023',
                    '🌟 Israeli rifler who excelled immediately at Super Team level'
                ],
                history: [
                    'Lotan "Spinx" Giladi joined Team Vitality as part of their Super Team roster reconstruction, bringing an aggressive rifle game that complemented ZywOo and flameZ perfectly.',
                    'He is one of multiple Israeli players who have broken into the upper tier of European CS, and his consistent impact helped Vitality win IEM Katowice 2023 among other titles.',
                    'His development at Vitality continues to show he belongs at the very top of Counter-Strike competition.'
                ],
                timeline: [
                    { years: '2020–2022', team: 'ENCE Esports / Israeli scene', note: 'EU CS pathway before Vitality.' },
                    { years: '2022–Now', team: 'Team Vitality', note: 'Super Team rifler — IEM champion.' }
                ]
            },
            // ── HEROIC CS2 ────────────────────────────────────────────────
            stavn: {
                achievements: [
                    '🏆 BLAST Premier Fall Final 2021 (Heroic)',
                    '🥇 IEM Winter 2021 Champion (Heroic)',
                    '🎖 HLTV Top-10 player 2021',
                    '🌟 Most consistent Danish fragger in his generation'
                ],
                history: [
                    'Martin "stavn" Lund is a Danish rifler who became one of the most reliable fraggers in Tier 1 Counter-Strike, helping Heroic establish themselves as a genuine Top-5 global team.',
                    'His consistent output at major events and HLTV rankings underpinned Heroic\'s dominant 2021 year when they won BLAST Fall Final and IEM Winter.',
                    'He remains the cornerstone entry/support fragger within Heroic\'s disciplined tactical system under cadiaN\'s calling.'
                ],
                timeline: [
                    { years: '2018–2019', team: 'Tricked Esport / Danish scene', note: 'Rising through Danish CS ranks.' },
                    { years: '2020–Now', team: 'Heroic', note: 'BLAST champion 2021, HLTV Top-10 star fragger.' }
                ]
            },
            cadian: {
                achievements: [
                    '🏆 BLAST Premier Fall Final 2021 (Heroic)',
                    '🥇 IEM Winter 2021 Champion (Heroic)',
                    '🎖 HLTV Top-20 player multiple years',
                    '🌟 One of the most respected Danish IGL-AWPers in CS'
                ],
                history: [
                    'Casper "cadiaN" Møller is the in-game leader and AWPer of Heroic, rebuilding the Danish organisation into a genuine Top-5 global force with disciplined tactical Counter-Strike.',
                    'He won BLAST Fall Final 2021 and IEM Winter 2021 with a roster he largely assembled and directed, proving himself as one of the best calling minds in the CS scene.',
                    'His rare dual IGL-primary AWPer role and calm shot-calling under pressure define Heroic\'s identity in every tournament they compete in.'
                ],
                timeline: [
                    { years: '2015–2019', team: 'Various EU orgs (Sprout, OpTic DK, etc.)', note: 'Danish CS journey across multiple orgs.' },
                    { years: '2020–Now', team: 'Heroic', note: 'IGL & AWPer — BLAST/IEM champion, built Top-5 team.' }
                ]
            },
            // ── NaVi CS2 ─────────────────────────────────────────────────
            b1t: {
                achievements: [
                    '🏆 PGL Major Stockholm 2021 (Natus Vincere)',
                    '🥇 BLAST Premier World Final 2021',
                    '🎖 HLTV Top-10 player 2021',
                    '🌟 Youngest player on the all-time CS:GO Major-winning NAVI roster'
                ],
                history: [
                    'Valerii "b1t" Vakhovskyi joined NAVI in 2021 as a teenage rifler and immediately won a Major Championship in his debut T1 season — one of the fastest rises in CS history.',
                    'As part of the iconic "s1mple era" NAVI roster, his consistent support fragging and reliability underpinned the team\'s historic 2021 campaign of near-total dominance.',
                    'With s1mple\'s departure in 2023, b1t assumed a greater carry responsibility and has become central to the new NAVI identity under Aleksib\'s in-game leadership.'
                ],
                timeline: [
                    { years: '2020', team: 'NAVI Junior', note: 'Academy — fast-tracked due to exceptional talent.' },
                    { years: '2021–Now', team: 'Natus Vincere', note: 'Major Champion 2021, key CS2 rebuild piece.' }
                ]
            },
            aleksib: {
                achievements: [
                    '🏆 IEM Katowice 2020 (ENCE Esports)',
                    '🥇 BLAST Premier wins with OG Esports',
                    '🎖 Led ENCE to Major Final 2019 — Finland\'s first',
                    '🌟 One of Europe\'s most respected strategic IGLs'
                ],
                history: [
                    'Aleksi "Aleksib" Virolainen is a Finnish in-game leader renowned for disciplined, structured Counter-Strike calling and exceptional team-building ability.',
                    'He led ENCE to their historic Major Final appearance in 2019 and to IEM Katowice 2020, before joining OG Esports and then NAVI to lead their post-s1mple rebuild.',
                    'His patient, systematic calling style and veteran perspective have been credited with rebuilding Natus Vincere\'s competitive identity in the CS2 era.'
                ],
                timeline: [
                    { years: '2018–2020', team: 'ENCE', note: 'Led ENCE to Major Final 2019, IEM Katowice 2020.' },
                    { years: '2020–2022', team: 'OG Esports', note: 'BLAST event wins as IGL.' },
                    { years: '2023–Now', team: 'Natus Vincere', note: 'IGL for NaVi CS2 rebuild — post-s1mple era.' }
                ]
            },
            // ── MOUZ CS2 ─────────────────────────────────────────────────
            xertion: {
                achievements: [
                    '🏆 IEM Katowice 2024 Champion (MOUZ)',
                    '🥇 Multiple IEM and ESL titles with MOUZ',
                    '🎖 HLTV Top-10 player 2023',
                    '🌟 One of the highest-ceiling young riflers in CS2 era'
                ],
                history: [
                    'Dorian "xertioN" Berman is a Polish-Israeli rifler who emerged as one of the most exciting young players during the CS:GO-to-CS2 transition, becoming a star at MOUZ.',
                    'His aggressive entry-focused playstyle complemented frozen perfectly at MOUZ, and together they powered the team to IEM Katowice 2024 — one of the most prestigious titles in Counter-Strike.',
                    'xertioN is widely regarded as a future cornerstone of the CS2 ecosystem and the centerpiece of MOUZ\'s continuing rise.'
                ],
                timeline: [
                    { years: '2021', team: 'MOUZ NXT (academy)', note: 'Youth pipeline — developed inside MOUZ system.' },
                    { years: '2022–Now', team: 'MOUZ', note: 'IEM Katowice 2024 champion — star rifler and entry.' }
                ]
            },
            frozen: {
                achievements: [
                    '🏆 IEM Katowice 2024 Champion (MOUZ)',
                    '🥇 ESL Pro League S12 — top team performance',
                    '🎖 HLTV Top-20 player multiple years',
                    '🌟 One of the most technically gifted riflers in EU Counter-Strike'
                ],
                history: [
                    'David "frozen" Čerňanský is a Slovak rifler who has been one of MOUZ\'s most important players throughout their multi-year competitive run at the top of the CS scene.',
                    'Renowned for his mechanical precision and aggressive entry style, he has been a consistent HLTV Top-20 presence and a key cog in MOUZ\'s international results across multiple roster generations.',
                    'He and xertioN form one of the most dangerous rifle duos in global Counter-Strike, powering MOUZ\'s IEM Katowice 2024 championship together.'
                ],
                timeline: [
                    { years: '2019', team: 'Windigo / AGO', note: 'EU CS breakthrough — instant HLTV attention.' },
                    { years: '2020–Now', team: 'MOUZ (mousesports)', note: 'IEM champion, HLTV Top-20 anchor.' }
                ]
            },
            // ── Fnatic CS2 ───────────────────────────────────────────────
            krimz: {
                achievements: [
                    '🏆 ESL One Cologne Major 2015, 2016 Champion (Fnatic)',
                    '🥇 ELEAGUE Major Boston 2018 Champion (Fnatic)',
                    '🎖 HLTV Top-10 player multiple years',
                    '🌟 Fnatic franchise legend — over a decade of elite CS'
                ],
                history: [
                    'Freddy "KRIMZ" Johansson is a Swedish veteran who has been synonymous with Fnatic Counter-Strike for over a decade, winning three Majors as part of one of the greatest CS:GO dynasties.',
                    'Part of the legendary Fnatic "olofmeister era" lineup — including KRIMZ, olofmeister, flusha, JW, and dennis — he contributed to one of the most dominant stretches in Major history.',
                    'His longevity and consistency, remaining competitive into the CS2 era more than ten years after his first Major, is a testament to his elite professionalism and adaptability.'
                ],
                timeline: [
                    { years: '2013–Now', team: 'Fnatic', note: '3× Major champion, franchise cornerstone, all-time great.' }
                ]
            },
            blamef: {
                achievements: [
                    '🏆 IEM Katowice 2022 with Cloud9 (as IGL)',
                    '🥇 BLAST Premier titles at multiple organisations',
                    '🎖 HLTV Top-20 player multiple years',
                    '🌟 Rare dual IGL-star-rifler — one of the most complete players in CS'
                ],
                history: [
                    'Benjamin "blameF" Bremer is a Danish player who carved out a unique niche as both in-game leader and primary rifler — a combination rarely executed successfully at Tier 1 level.',
                    'At Complexity Gaming he was the cornerstone of an improbable rise to Top-5 global status; he later led Astralis before joining Fnatic where he brings that rare dual-role excellence.',
                    'His strategic intelligence, rifle output, and calm leadership under pressure make him one of the most complete individuals in Counter-Strike.'
                ],
                timeline: [
                    { years: '2016–2019', team: 'Various EU orgs', note: 'Danish CS — rising through ranks as IGL-rifler.' },
                    { years: '2019–2021', team: 'Complexity Gaming', note: 'Franchise IGL — elevated Complexity to Top-5 globally.' },
                    { years: '2021–2023', team: 'Astralis', note: 'IGL for Danish CS legend org.' },
                    { years: '2024–Now', team: 'Fnatic', note: 'Elite IGL-rifler driving Fnatic CS2 revival.' }
                ]
            },
            // ── Fnatic Valorant ───────────────────────────────────────────
            boaster: {
                achievements: [
                    '🏆 VCT EMEA champion (Fnatic)',
                    '🥇 Valorant Champions 2022 Grand Finalist',
                    '🎖 Most celebrated European Valorant IGL',
                    '🌟 Named one of the most entertaining and impactful Valorant personalities globally'
                ],
                history: [
                    'Jake "Boaster" Howlett is the in-game leader and cultural icon of Fnatic VALORANT — known globally for his infectious confidence, bombastic personality, and sharp strategic mind.',
                    'He led Fnatic through their dominant EMEA eras and to the Valorant Champions 2022 Grand Final, bringing European Valorant to the world\'s spotlight.',
                    'His charisma, leadership style, and ability to inspire teammates under pressure have made him one of the most beloved figures in the entire VALORANT ecosystem.'
                ],
                timeline: [
                    { years: '2020–Now', team: 'Fnatic', note: 'IGL — EMEA champion, Champions 2022 Grand Finalist.' }
                ]
            },
            alfajer: {
                achievements: [
                    '🏆 VCT EMEA champion with Fnatic',
                    '🥇 Valorant Champions 2022 Finalist',
                    '🎖 Named top-3 EMEA fragger multiple VCT splits',
                    '🌟 Youngest elite player on Fnatic\'s senior roster at debut'
                ],
                history: [
                    'Timur "Alfajer" Korkmaz joined Fnatic\'s VALORANT roster as one of the youngest players in the professional scene, immediately proving he could perform at elite level under Boaster\'s system.',
                    'His raw fragging ceiling and clutch performances in EMEA league play earned him recognition as one of the highest-ceiling prospects in European Valorant.',
                    'He was a key contributor to Fnatic\'s run to the Valorant Champions 2022 Grand Final and continues as one of EMEA\'s premier entry fraggers.'
                ],
                timeline: [
                    { years: '2021', team: 'Fnatic Academy', note: 'Youth pipeline — fast-tracked to senior squad.' },
                    { years: '2022–Now', team: 'Fnatic', note: 'Star fragger — Champions 2022 Finalist.' }
                ]
            },
            // ── NiP CS2 ──────────────────────────────────────────────────
            rez: {
                achievements: [
                    '🏆 ESL Pro League wins with NiP',
                    '🥇 HLTV Top-20 player multiple years',
                    '🎖 One of Sweden\'s most consistent individual CS performers',
                    '🌟 NiP anchor fragger across multiple roster rebuild eras'
                ],
                history: [
                    'Fredrik "REZ" Sterner is a Swedish rifler who has been one of NiP\'s most reliable performers, providing elite explosive rifle play across multiple roster rebuilds at the historic Swedish organisation.',
                    'Known for his aggressive opening-duel style and reliable clutch performance, REZ has been an anchor in a NiP lineup that maintained international relevance through various transitional periods.',
                    'His loyalty to NiP and consistent HLTV Top-20 performances make him one of Sweden\'s most important active Counter-Strike players.'
                ],
                timeline: [
                    { years: '2017', team: 'Epsilon / Recon 5', note: 'Swedish scene — standout performances before T1 call.' },
                    { years: '2018–Now', team: 'Ninjas in Pyjamas', note: 'Star rifler — multiple years HLTV Top-20.' }
                ]
            },
            allu: {
                achievements: [
                    '🏆 IEM Katowice 2020 (led ENCE as IGL)',
                    '🥇 HLTV Top-20 player 2015, 2016',
                    '🎖 Led Finland\'s first ever CS Major Final appearance (2019 with ENCE)',
                    '🌟 Only Finnish player to compete in two different Major Finals'
                ],
                history: [
                    'Aleksi "allu" Jalli is a Finnish CS legend who excelled as a star AWPer at NiP before transitioning to lead ENCE — building them into Finland\'s first-ever Major finalist team in 2019.',
                    'His extraordinary versatility, excelling as both the primary sniper and an in-game leader, is almost unprecedented in Counter-Strike history.',
                    'He returned to NiP for the CS2 era as a veteran presence, bringing championship experience and one of the deepest tactical minds in European CS.'
                ],
                timeline: [
                    { years: '2013–2015', team: 'NiP', note: 'Star AWPer — NiP CS:GO dynasty era.' },
                    { years: '2015–2016', team: 'FaZe / Team EnVyUs', note: 'Major Finalist 2015 as standalone star AWPer.' },
                    { years: '2016–2021', team: 'ENCE', note: 'IGL — built ENCE to Major Final 2019, IEM 2020.' },
                    { years: '2022–Now', team: 'NiP', note: 'Veteran return — CS2 rebuild anchor and mentor.' }
                ]
            },
            // ── Vitality Valorant ─────────────────────────────────────────
            sayf: {
                achievements: [
                    '🏆 VCT EMEA champion with Team Vitality',
                    '🥇 Named top duelist in European Valorant multiple splits',
                    '🎖 Consistent VCT Masters level performer',
                    '🌟 Became the face of Vitality\'s Valorant expansion'
                ],
                history: [
                    'Saif "Sayf" Jibraeel is a Swedish Valorant player of Iraqi heritage who became the primary duelist and offensive engine for Team Vitality\'s VALORANT roster.',
                    'His aggressive, high-impact duelist playstyle has powered Vitality VALORANT\'s EMEA campaigns, earning recognition as one of Europe\'s elite individual performers.',
                    'His success helped establish Vitality\'s Valorant program alongside their already dominant CS2 and League of Legends divisions.'
                ],
                timeline: [
                    { years: '2020–2021', team: 'Various EU Valorant orgs', note: 'Early EMEA scene — standout individual.' },
                    { years: '2022–Now', team: 'Team Vitality', note: 'EMEA Valorant star duelist — EMEA champion.' }
                ]
            },
            // ── Heretics Valorant ─────────────────────────────────────────
            miniboo: {
                achievements: [
                    '🏆 VCT EMEA champion with Team Heretics',
                    '🥇 Named best young player in European Valorant multiple splits',
                    '🎖 Breakout star of VCT EMEA 2023',
                    '🌟 Most exciting teen Valorant prospect in EU'
                ],
                history: [
                    'Thomas "Miniboo" Garnaud is a French duelist/entry player who became one of the most exciting young talents in European VALORANT at Team Heretics.',
                    'Known for his explosive entry fragging, fearless aggression, and reads that defy his age, he has consistently delivered elite performances in VCT EMEA competition.',
                    'He is projected by analysts across the industry as one of the next great European Valorant stars with years of peak performance ahead.'
                ],
                timeline: [
                    { years: '2022–Now', team: 'Team Heretics', note: 'EMEA top-5 duelist, rising EU star, EMEA champion.' }
                ]
            },
            benjyfishy: {
                achievements: [
                    '🏆 Fortnite FNCS — multiple event wins and deep finishes',
                    '🥇 Top-ranked Fortnite player worldwide across multiple seasons',
                    '🎖 Competed at Fortnite World Cup level',
                    '🌟 First viral Fortnite megastar to cross over to professional Valorant'
                ],
                history: [
                    'Benjy "benjyfishy" David Fish became a global phenomenon as a teenage Fortnite superstar, reaching the highest levels of FNCS competition and earning a massive content creator and competitive following.',
                    'He transitioned to VALORANT with Team Heretics, bringing his exceptional mechanical ability and competitive mentality to a new title and proving himself as a legitimate professional in both games.',
                    'His crossover appeal between the Fortnite and Valorant communities made his transition one of the most-watched storylines in European esports history.'
                ],
                timeline: [
                    { years: '2018–2022', team: 'NRG / Various (Fortnite career)', note: 'World-class Fortnite star, multiple FNCS wins.' },
                    { years: '2022–Now', team: 'Team Heretics (Valorant)', note: 'Valorant transition — EMEA professional Valorant.' }
                ]
            },
            // ── Heretics LoL ─────────────────────────────────────────────
            jankos: {
                achievements: [
                    '🏆 LEC Champion 4× Spring splits with G2 Esports',
                    '🥇 MSI Finalist 2019 and 2022 (G2)',
                    '🎖 Worlds Grand Finalist 2019 — best EU result ever',
                    '🌟 Most decorated European jungler in LEC history'
                ],
                history: [
                    'Marcin "Jankos" Jankowski is the most decorated European jungler in LEC history, winning four LEC spring titles with G2 Esports and reaching multiple international grand finals.',
                    'As G2\'s playmaking jungler throughout their dominant 2019–2022 era, he was central to Europe\'s best-ever international results at both Worlds 2019 and MSI 2019/2022.',
                    'He joined Team Heretics to continue competing at the top level and bring his championship experience to a younger roster building toward LEC and international relevance.'
                ],
                timeline: [
                    { years: '2013–2015', team: 'Various EU LCS teams (ROCCAT, etc.)', note: 'EU LCS journey begins.' },
                    { years: '2016–2017', team: 'H2K Gaming', note: 'EU LCS star — Worlds semifinal.' },
                    { years: '2018–2023', team: 'G2 Esports', note: '4× LEC champion, Worlds/MSI Finalist — EU GOAT jungler.' },
                    { years: '2024–Now', team: 'Team Heretics', note: 'Veteran jungler anchoring Heretics LEC roster.' }
                ]
            },
            // ── Rocket League (M0nkey M00n) ───────────────────────────────
            m0nkeym00n: {
                achievements: [
                    '🏆 RLCS World Championship 2022 (Karmine Corp)',
                    '🥇 RLCS European regional titles — multiple splits',
                    '🎖 One of the most decorated EU Rocket League players',
                    '🌟 Karmine Corp cultural icon — most electric RL team in history'
                ],
                history: [
                    'Victor "M0nkey M00n" Locquet is a French Rocket League prodigy who became a world champion with Karmine Corp in 2022, the most culturally significant team in Rocket League history.',
                    'Known for his mechanical ceiling, flashy playstyle, and ability to perform under the enormous Karmine Corp fanbase pressure, he was part of a generational KC squad that dominated internationally.',
                    'He joined Twisted Minds in the Middle East, bringing world-class talent and championship pedigree to the region\'s rapidly growing Rocket League scene.'
                ],
                timeline: [
                    { years: '2020–2022', team: 'Karmine Corp', note: 'RLCS World Champion 2022 — KC cultural icon.' },
                    { years: '2022–2024', team: 'Various EU orgs', note: 'Continued elite EU Rocket League.' },
                    { years: '2024–Now', team: 'Twisted Minds', note: 'World-class signing for Middle East RL.' }
                ]
            },
            // ── Apex Legends (ImperialHal) ────────────────────────────────
            imperialhal: {
                achievements: [
                    '🏆 ALGS Championship 2022 (TSM)',
                    '🥇 Multiple ALGS Split victories across seasons',
                    '🎖 Most decorated Apex Legends professional of his era',
                    '🌟 Face of competitive Apex Legends globally — years at #1'
                ],
                history: [
                    'Philip "ImperialHal" Dosen rose through the battle royale scene to become the most recognisable figure in competitive Apex Legends, leading TSM\'s dynasty with unmatched game sense and IGL calls.',
                    'He won the ALGS Championship 2022 and multiple split victories, consistently finishing at the top of global standings through dominant team coordination.',
                    'He joined Team Falcons in 2024, bringing his Apex Legends championship pedigree to the Middle East organisation\'s growing Apex division.'
                ],
                timeline: [
                    { years: '2019–2024', team: 'TSM', note: 'ALGS Champion 2022, face of competitive Apex Legends globally.' },
                    { years: '2024–Now', team: 'Team Falcons', note: 'Star signing — brings championship DNA to Falcons Apex.' }
                ]
            },
            // ── Cloud9 CS2 ───────────────────────────────────────────────
            ax1le: {
                achievements: [
                    '🏆 IEM Katowice 2022 (Cloud9)',
                    '🥇 BLAST Spring 2022 Champion (Cloud9)',
                    '🎖 HLTV Top-10 player 2021 and 2022',
                    '🌟 One of Russia\'s most talented and dynamic CS players'
                ],
                history: [
                    'Sergey "Ax1Le" Rykhtorov broke through at Gambit Esports before joining Cloud9, where he became a star rifler during Cloud9\'s remarkable 2022 resurgence to the very top of global CS.',
                    'His explosive entry play and mechanical consistency helped Cloud9 win IEM Katowice 2022 and BLAST Spring 2022, establishing him as a HLTV Top-10 caliber performer.',
                    'He continues as the cornerstone of Cloud9\'s competitive CS2 roster and one of Russia\'s premier active Counter-Strike professionals.'
                ],
                timeline: [
                    { years: '2019–2021', team: 'Gambit Esports', note: 'Breakout — top CIS rifler in dominant Gambit era.' },
                    { years: '2021–Now', team: 'Cloud9', note: 'IEM Katowice & BLAST champion 2022.' }
                ]
            },
            electronic: {
                achievements: [
                    '🏆 PGL Major Stockholm 2021 (Natus Vincere)',
                    '🥇 BLAST Premier World Final 2021 (NAVI)',
                    '🎖 HLTV Top-10 player 2019, 2020, 2021',
                    '🌟 World champion and cornerstone of NAVI\'s dominant 2021 era'
                ],
                history: [
                    'Denis "electroNic" Sharipov was a cornerstone rifler for Natus Vincere throughout their historically dominant 2021 era, winning a Major and BLAST World Final alongside s1mple in one of CS\'s greatest-ever teams.',
                    'After years at the absolute top with NAVI — consistently ranked HLTV Top-10 — he joined Cloud9 to take on an expanded leadership and star role as the team rebuilt for CS2.',
                    'His championship experience, elite rifle mechanics, and professional presence make him a key voice and fragger in Cloud9\'s international ambitions.'
                ],
                timeline: [
                    { years: '2017–2022', team: 'Natus Vincere', note: 'Major Champion 2021, HLTV Top-10, s1mple era cornerstone.' },
                    { years: '2022–Now', team: 'Cloud9', note: 'Leadership and star fragger role in CS2 rebuild.' }
                ]
            },
            // ── Cloud9 LoL ────────────────────────────────────────────────
            fudge: {
                achievements: [
                    '🏆 LCS Champion 2021 Summer (Cloud9)',
                    '🥇 Multiple LCS playoff finals with Cloud9',
                    '🎖 Worlds appearance 2021 — Australia\'s star LoL export',
                    '🌟 Cloud9 franchise top laner'
                ],
                history: [
                    'Ibrahim "Fudge" Allami is an Australian top laner who became a central piece of Cloud9\'s LCS roster, winning the 2021 Summer Championship and qualifying for Worlds as a key carry threat.',
                    'Known for his flexible champion pool across carries and tanks, Fudge has developed into one of North America\'s premier top laners with consistent improvement year over year.',
                    'He continues to anchor Cloud9\'s top lane as a long-term franchise cornerstone and is regarded as the face of Australian LoL esports internationally.'
                ],
                timeline: [
                    { years: '2020', team: 'Cloud9 Academy', note: 'Youth development — fast-tracked to LCS.' },
                    { years: '2021–Now', team: 'Cloud9 LCS', note: 'LCS Champion 2021, franchise top laner, Worlds participant.' }
                ]
            },
            blaber: {
                achievements: [
                    '🏆 LCS Champion multiple times with Cloud9',
                    '🥇 LCS MVP 2020',
                    '🎖 5+ seasons as one of North America\'s top junglers',
                    '🌟 Cloud9 icon — longest-tenured star in org history'
                ],
                history: [
                    'Robert "Blaber" Huang is Cloud9\'s iconic jungler, having spent his entire professional career with the organisation and earning multiple LCS championships across five seasons.',
                    'Named LCS MVP in 2020 for his hyper-aggressive carry-jungling style, he has been the most consistent and impactful NA jungler across the entire 2019–2024 era.',
                    'His loyalty to Cloud9 and year-on-year excellence make him one of the defining figures of North American League of Legends esports history.'
                ],
                timeline: [
                    { years: '2018–Now', team: 'Cloud9', note: 'LCS MVP 2020, multiple champion, franchise icon for 6+ years.' }
                ]
            },
            jojopyun: {
                achievements: [
                    '🏆 LCS champion runs with Cloud9',
                    '🥇 Breakout LCS impact in rookie season',
                    '🎖 Named among top NA mid laners — fearless carry style',
                    '🌟 High-ceiling Canadian talent in Cloud9 system'
                ],
                history: [
                    'Joseph "Jojopyun" Pyun debuted in the LCS with immediate impact, showcasing a fearless carry style on champions like LeBlanc, Kassadin, and Vex that immediately drew comparisons to LCS legends.',
                    'He quickly established himself as one of North America\'s most exciting mid laners and continues to develop under the Cloud9 high-performance environment.',
                    'His raw mechanical gifts and proactive roaming make him a long-term pillar of Cloud9\'s roster plans and one of NA\'s brightest individual talents.'
                ],
                timeline: [
                    { years: '2022–Now', team: 'Cloud9', note: 'LCS mid laner — top-tier NA carry.' }
                ]
            },
            berserker: {
                achievements: [
                    '🏆 Multiple LCS playoff finals with Cloud9',
                    '🥇 Regarded top-3 LCS ADC from debut season onward',
                    '🎖 Korean import who instantly excelled in the NA environment',
                    '🌟 Pristine mechanics — cleanest ADC in NA by most metrics'
                ],
                history: [
                    'Kim "Berserker" Min-cheol is a South Korean ADC who joined Cloud9 and immediately became regarded as the best or second-best ADC in North America, bringing LCK-level precision to the LCS.',
                    'Known for his pristine laning mechanics, consistent teamfight positioning, and patient approach to carries, he provides Cloud9 with a late-game win condition on every composition.',
                    'His consistency across seasons has made him a fan favourite and a key roster piece in Cloud9\'s pursuit of LCS championships and international success.'
                ],
                timeline: [
                    { years: '2022–Now', team: 'Cloud9', note: 'Top-3 LCS ADC every season — Korean import success story.' }
                ]
            },
            // ── Sentinels Valorant ────────────────────────────────────────
            tenz: {
                achievements: [
                    '🏆 VCT Stage 2 Masters Reykjavik 2021 (Sentinels)',
                    '🥇 Sentinels VCT NA domestic dominance 2021',
                    '🎖 North America\'s most popular VALORANT player',
                    '🌟 First globally iconic star of VALORANT esports'
                ],
                history: [
                    'Tyson "TenZ" Ngo transitioned from CS:GO (Cloud9) to VALORANT in 2021 and became one of the game\'s first global superstars, showcasing mechanical ability that transcended the genre.',
                    'Loaned to Sentinels for VCT 2021, he helped them dominate NA and win Masters Reykjavik — the first major international VALORANT event — before permanently joining as the franchise player.',
                    'Known for elite mechanical skill, highlight-level plays, and the largest VALORANT fanbase in North America, he remains a central figure in NA competitive Valorant.'
                ],
                timeline: [
                    { years: '2019–2020', team: 'Cloud9 (CS:GO)', note: 'CS:GO career before Valorant switch.' },
                    { years: '2021–Now', team: 'Sentinels', note: 'Masters Reykjavik champion 2021, NA Valorant icon.' }
                ]
            },
            sacy: {
                achievements: [
                    '🏆 Valorant Champions 2022 (LOUD) — World Champion',
                    '🥇 Multiple VCT international wins with LOUD and Sentinels',
                    '🎖 Named top-5 LATAM Valorant player globally',
                    '🌟 Won Worlds before moving to NA — rare achievement'
                ],
                history: [
                    'Gustavo "sacy" Rossi won the Valorant World Championship in 2022 with LOUD before joining Sentinels as a high-profile international signing — bringing championship DNA to NA.',
                    'A flexible player capable of playing multiple roles from duelist to initiator, he brings LATAM flair and world-champion experience to the Sentinels system.',
                    'His arrival alongside TenZ formed one of the most high-profile and celebrated pairings in NA VALORANT history.'
                ],
                timeline: [
                    { years: '2020–2022', team: 'LOUD (Brazil)', note: 'Valorant World Champion 2022 — LATAM icon.' },
                    { years: '2023–Now', team: 'Sentinels', note: 'International star signing — champion pedigree in NA.' }
                ]
            },
            pancada: {
                achievements: [
                    '🏆 Valorant Champions 2022 (LOUD) — World Champion',
                    '🥇 Key contributor to LOUD\'s entire championship run',
                    '🎖 Elite initiator/flex player from South American scene',
                    '🌟 Two-time world championship team member as Sentinels key support'
                ],
                history: [
                    'Bryan "pancada" Luna was a critical piece of LOUD\'s 2022 Valorant World Championship campaign, providing consistent initiator utility and support that enabled LOUD\'s aggressive carries to shine.',
                    'He joined Sentinels alongside sacy, bringing a second world champion to their roster and giving the team a championship-proven South American international core.',
                    'His understated but reliable style — perfect utility, consistent positioning, clutch support — complements the high-profile stars around him in the Sentinels system perfectly.'
                ],
                timeline: [
                    { years: '2021–2022', team: 'LOUD (Brazil)', note: 'Valorant World Champion 2022.' },
                    { years: '2023–Now', team: 'Sentinels', note: 'LATAM world champion reinforcing NA Sentinels roster.' }
                ]
            },
            // ── 100 Thieves Valorant ──────────────────────────────────────
            asuna: {
                achievements: [
                    '🏆 VCT NA title runs with 100 Thieves',
                    '🥇 Regarded top-3 NA duelist for multiple VCT cycles',
                    '🎖 Multiple VCT Masters appearances with 100T',
                    '🌟 100 Thieves franchise Valorant cornerstone'
                ],
                history: [
                    'Peter "Asuna" Mazuryk is a Ukrainian-American duelist/entry who became one of the most recognizable faces of 100 Thieves\' VALORANT roster, known for his lightning-fast first-contact aggression.',
                    'Consistently ranked among the best individual performers in VCT NA competition, his raw mechanics and fearless entry style make him the primary offensive threat in 100T\'s tactical system.',
                    'His longevity as a franchise player at 100 Thieves and continued top-tier performance make him one of the defining figures of North American Valorant.'
                ],
                timeline: [
                    { years: '2020', team: 'Immortals / various', note: 'Early NA Valorant scene standout.' },
                    { years: '2021–Now', team: '100 Thieves', note: 'Franchise star duelist — consistent VCT NA top performer.' }
                ]
            },
            // ── NRG Valorant ─────────────────────────────────────────────
            fns: {
                achievements: [
                    '🏆 VCT NA titles with NRG Esports',
                    '🥇 One of the most respected VALORANT IGLs in North America',
                    '🎖 Built NRG into a consistent NA international-level contender',
                    '🌟 CS veteran who became a pivotal Valorant IGL at scene launch'
                ],
                history: [
                    'Pujan "FNS" Mehta is a veteran NA in-game leader who transitioned from CS:GO to become one of VALORANT\'s most tactically sophisticated callers at the game\'s launch.',
                    'At NRG, he assembled and led one of NA\'s most consistent VALORANT rosters, reaching multiple VCT international events through disciplined team play rather than raw mechanical firepower.',
                    'His calm, analytical calling style gave NRG a structural and strategic edge that made them more than the sum of their individual parts throughout multiple VCT cycles.'
                ],
                timeline: [
                    { years: '2014–2020', team: 'Various CS:GO orgs (CLG, Cloud9, etc.)', note: 'CS veteran — IGL and utility player background.' },
                    { years: '2021', team: 'Version1', note: 'Early Valorant IGL — immediate T1 relevance.' },
                    { years: '2022–Now', team: 'NRG Esports', note: 'NA Valorant IGL — multiple VCT international appearances.' }
                ]
            },
            crashies: {
                achievements: [
                    '🏆 VCT NA champion seasons with NRG',
                    '🥇 VCT Masters level performer',
                    '🎖 Top initiator/flex player in North American Valorant',
                    '🌟 Consistent NRG anchor across multiple VCT cycles'
                ],
                history: [
                    'Austin "crashies" Roberts is a versatile Valorant player known for his elite initiator and sentinel play, providing the critical information, utility, and structure that FNS needs to call effectively for NRG.',
                    'Alongside Victor, he formed one of the most reliable support duos in NA VALORANT — consistently underrated individually but essential to NRG\'s system functioning.',
                    'His calm, consistent performances under playoff pressure make him one of the most trustworthy professionals in North American Valorant.'
                ],
                timeline: [
                    { years: '2020–2021', team: 'Version1', note: 'Early Valorant career alongside FNS.' },
                    { years: '2022–Now', team: 'NRG Esports', note: 'Key flex/initiator — VCT NA consistent contender.' }
                ]
            },
            // ── EDG LoL ───────────────────────────────────────────────────
            scout: {
                achievements: [
                    '🏆 LoL World Champion 2021 (EDward Gaming)',
                    '🥇 LPL Champion multiple seasons with EDG',
                    '🎖 LPL MVP candidate 2021 — most impactful EDG mid laner',
                    '🌟 Upset T1 in Worlds 2021 Final to deny Faker\'s comeback'
                ],
                history: [
                    'Lee "Scout" Ye-chan is a Korean mid laner who moved to China\'s LPL and became one of the most dominant players in the world, winning the 2021 World Championship with EDward Gaming.',
                    'His and EDG\'s 3–0 victory over T1 in the 2021 Worlds Final remains one of the most celebrated upsets in League of Legends history, denying Faker a career-comeback fourth title.',
                    'He continues to be the backbone of EDG\'s mid lane and one of the LPL\'s most consistent international stage performers across multiple seasons.'
                ],
                timeline: [
                    { years: '2015–2016', team: 'SKT T1 (trainee)', note: 'Korean development — did not make main roster.' },
                    { years: '2016–Now', team: 'EDward Gaming (LPL)', note: 'LPL star mid laner — World Champion 2021.' }
                ]
            },
            meiko: {
                achievements: [
                    '🏆 LoL World Champion 2021 (EDward Gaming)',
                    '🥇 LPL Champion multiple seasons with EDG',
                    '🎖 Regarded as one of the greatest supports in LPL history',
                    '🌟 Spent entire decade-long career at EDG — franchise legend'
                ],
                history: [
                    'Tian "Meiko" Ye is the legendary support of EDward Gaming, having spent his entire professional career with one organisation and winning the World Championship in 2021 as the team\'s emotional and strategic anchor.',
                    'Regarded as one of the greatest supports in LPL history, his veteran presence and deep understanding of the game have been central to EDG\'s identity across multiple roster generations.',
                    'His longevity and championship legacy across a decade-plus elite career place him among the most accomplished players in League of Legends esports history.'
                ],
                timeline: [
                    { years: '2014–Now', team: 'EDward Gaming', note: 'Franchise legend — World Champion 2021, 10+ year EDG icon.' }
                ]
            },
            // ── Weibo LoL ─────────────────────────────────────────────────
            xiaohu: {
                achievements: [
                    '🏆 MSI Champion 2021 (Royal Never Give Up)',
                    '🥇 LPL Champion multiple times with RNG',
                    '🎖 Worlds Finalist 2021 (RNG)',
                    '🌟 Most versatile Chinese player — elite at both mid and top lane'
                ],
                history: [
                    'Li "Xiaohu" Yuan-Hao is a Chinese player renowned for extraordinary versatility, having competed at world-class level as both a mid laner and a top laner for RNG and then Weibo Gaming.',
                    'He was central to RNG\'s dominant 2021 MSI championship run and their Worlds 2021 Finalist campaign, earning recognition as one of China\'s most decorated and adaptable players.',
                    'He joined Weibo Gaming and continues to be a dominant LPL presence, bringing veteran leadership and championship pedigree to younger teammates.'
                ],
                timeline: [
                    { years: '2016–2022', team: 'Royal Never Give Up', note: 'LPL & MSI Champion, Worlds Finalist 2021.' },
                    { years: '2023–Now', team: 'Weibo Gaming', note: 'Continued LPL top-tier competition as veteran leader.' }
                ]
            },
            // ── JDG LoL ───────────────────────────────────────────────────
            '369': {
                achievements: [
                    '🏆 LPL Champion 2023 (JDG Gaming)',
                    '🥇 MSI Champion 2023 (JDG Gaming)',
                    '🎖 Worlds Finalist 2023 (JDG)',
                    '🌟 Regarded as the best top laner in the world for 2023 season'
                ],
                history: [
                    'Bai "369" Jia-Hao is the top laner for JDG Gaming and was widely regarded as the world\'s best top laner during JDG\'s dominant 2023 season, performing elite across carries and tanks equally.',
                    'JDG won the LPL title and MSI 2023 before reaching the Worlds Final, where they fell to T1 in a historic match — 369\'s consistency was paramount at every stage of that incredible run.',
                    'His ability to win lane, trade efficiently, and execute both split-push and teamfight strategies at an elite level makes him the gold standard for the top-lane position.'
                ],
                timeline: [
                    { years: '2018–2019', team: 'JDG / TOP Esports (sub)', note: 'LPL development pathway.' },
                    { years: '2020–Now', team: 'JDG Gaming', note: 'LPL champion, MSI 2023 champion, Worlds Finalist 2023.' }
                ]
            },
            knight: {
                achievements: [
                    '🏆 LPL Champion 2023 (JDG Gaming)',
                    '🥇 MSI Champion 2023 (JDG Gaming)',
                    '🎖 LPL MVP 2023',
                    '🌟 Named the world\'s best mid laner in 2023 — rival only to Faker'
                ],
                history: [
                    'Zhuo "Knight" Ding is the mid laner for JDG Gaming and was named LPL MVP in 2023 — widely regarded as the best mid laner in the world that year, a peer only to Faker himself.',
                    'His lane dominance, proactive roaming, and decisive teamfight impact powered JDG\'s LPL and MSI championship runs, making every opponent\'s mid laner look second-rate.',
                    'His 2023 Worlds Final rivalry with Faker was one of the most anticipated individual matchups in League of Legends history, losing in a legendary series.'
                ],
                timeline: [
                    { years: '2018–2021', team: 'TOP Esports', note: 'LPL breakout — immediate world-class mid laner.' },
                    { years: '2022–Now', team: 'JDG Gaming', note: 'LPL MVP 2023, MSI champion, Worlds Finalist 2023.' }
                ]
            },
            ruler: {
                achievements: [
                    '🏆 LPL Champion 2023 (JDG Gaming)',
                    '🥇 MSI Champion 2023 (JDG Gaming)',
                    '🎖 Worlds Finalist 2017 (Samsung Galaxy — LCK)',
                    '🌟 Elite ADC in both Korean LCK and Chinese LPL at highest level'
                ],
                history: [
                    'Park "Ruler" Jae-hyuk is a South Korean ADC who reached the 2017 Worlds Final with Samsung Galaxy before moving to the LPL, where he went on to win both the LPL title and MSI with JDG Gaming in 2023.',
                    'His meticulous mechanics, precise teamfight positioning, and ability to perform on any composition have made him one of the most consistent ADCs to ever play across two different top-tier leagues.',
                    'He is considered one of the greatest international players to bridge the KR-CN competitive ecosystem successfully.'
                ],
                timeline: [
                    { years: '2016–2018', team: 'Samsung Galaxy / Gen.G (LCK)', note: 'Worlds Finalist 2017 — LCK star ADC.' },
                    { years: '2019–2021', team: 'JDG (first stint)', note: 'LPL transition era.' },
                    { years: '2022–Now', team: 'JDG Gaming', note: 'LPL & MSI champion 2023, Worlds Finalist 2023.' }
                ]
            },
            // ── FURIA CS2 ─────────────────────────────────────────────────
            fallen: {
                achievements: [
                    '🏆 CS:GO Major Champion — MLG Columbus 2016 & ESL Cologne 2016',
                    '🥇 ELeague Season 2 Champion',
                    '🎖 HLTV Top-10 player 2015, 2016',
                    '🌟 Father of Brazilian CS — built the entire national scene',
                    '🏅 Only IGL-AWPer to win two Majors in one calendar year'
                ],
                history: [
                    'Gabriel "FalleN" Toledo is the father of Brazilian Counter-Strike, leading the iconic "FalleN\'s Army" lineup — with coldzera, TACO, fnx, and fer — to back-to-back Major championships in 2016.',
                    'As both in-game leader and primary AWPer simultaneously, he pioneered the dual IGL-sniper role in CS:GO and brought global recognition and inspiration to an entire generation of Brazilian players.',
                    'He joined FURIA in 2024, returning to captain a new generation of Brazilian talent and mentoring the future of South American Counter-Strike.'
                ],
                timeline: [
                    { years: '2012–2016', team: 'Luminosity Gaming / SK Gaming', note: '2× Major Champion 2016 — Brazilian CS pioneer.' },
                    { years: '2016–2019', team: 'SK Gaming / MiBR', note: 'Sustained top-3 global status.' },
                    { years: '2019–2024', team: 'Team Liquid / MiBR', note: 'Veteran leadership across multiple orgs.' },
                    { years: '2024–Now', team: 'FURIA', note: 'Captain — new Brazilian CS2 chapter.' }
                ]
            },
            kscerato: {
                achievements: [
                    '🏆 Multiple IEM and BLAST event wins with FURIA',
                    '🥇 HLTV Top-20 player 2021, 2022',
                    '🎖 Most consistent Brazilian rifler of his generation',
                    '🌟 FURIA founding roster member — cornerstone since day one'
                ],
                history: [
                    'Kaike "KSCERATO" Cerato has been FURIA\'s anchor rifler since the team\'s founding in 2018, becoming one of the most reliable and impactful Brazilian players in international Counter-Strike history.',
                    'Known for his selfless positioning, clean rifle mechanics, and consistent performance across both clutch and entry roles, he has been the structural foundation of FURIA\'s international competitiveness for years.',
                    'He remains the backbone of FURIA\'s CS2 roster alongside veterans yuurih and FalleN, with one of the longest elite career spans of any Brazilian CS professional.'
                ],
                timeline: [
                    { years: '2019–Now', team: 'FURIA Esports', note: 'Founding member — HLTV Top-20, Brazilian CS icon.' }
                ]
            },
            yuurih: {
                achievements: [
                    '🏆 Multiple ESL/BLAST event runs with FURIA',
                    '🥇 HLTV Top-20 player 2021 and 2022',
                    '🎖 One of Brazil\'s most complete all-around CS players',
                    '🌟 FURIA founding roster veteran — co-built Brazilian CS elite'
                ],
                history: [
                    'Yuri "yuurih" Santos has been a central piece of FURIA\'s competitive identity since their inception, providing elite support fragging and clutch performance across every year of the organisation\'s existence.',
                    'Alongside KSCERATO, he formed one of the most consistent and dangerous Brazilian duos in Counter-Strike — elevating FURIA to regular Major-level performance globally.',
                    'His complete game — rifling, pistols, clutches, utility — across five consecutive HLTV Top-20 seasons cements him as one of Brazil\'s greatest CS exports.'
                ],
                timeline: [
                    { years: '2019–Now', team: 'FURIA Esports', note: 'Founding star — HLTV Top-20, Brazil CS co-pioneer with KSCERATO.' }
                ]
            },
            // ── Leviatan Valorant ─────────────────────────────────────────
            tacolilla: {
                achievements: [
                    '🏆 VCT LATAM / Americas champion with Leviatan',
                    '🥇 Multiple VCT Americas appearances at international level',
                    '🎖 Named best Valorant player from Chile — national icon',
                    '🌟 South America\'s breakthrough international VALORANT star'
                ],
                history: [
                    'Vicente "Tacolilla" Compagnon is a Chilean Valorant player who has established himself as South America\'s most consistent international-level performer over multiple VCT seasons.',
                    'As part of Leviatan\'s rise through VCT Americas, he has been the team\'s mechanical centerpiece, delivering elite fragging in both regional and international play against the world\'s best.',
                    'His performances have put Chile firmly on the global VALORANT map and inspired a generation of South American Valorant talent to pursue international competition.'
                ],
                timeline: [
                    { years: '2020–2021', team: 'Various LATAM Valorant orgs', note: 'Rising through South American Valorant scene.' },
                    { years: '2022–Now', team: 'Leviatan', note: 'VCT Americas star — SA Valorant icon, Chile\'s greatest.' }
                ]
            },
            // ── G2 Valorant ──────────────────────────────────────────────
            mixwell: {
                achievements: [
                    '🏆 VCT EMEA titles with G2 Esports Valorant',
                    '🥇 CS:GO Major top finishes before Valorant transition',
                    '🎖 Spain\'s first and most successful Valorant star at elite level',
                    '🌟 G2 Valorant founding cornerstone — helped establish EMEA dominance'
                ],
                history: [
                    'Oscar "mixwell" Cañellas is a Spanish player who established himself in CS:GO before transitioning to VALORANT at launch and becoming one of Europe\'s first breakout stars in the new game.',
                    'Joining G2 Esports\' Valorant division, he became a franchise cornerstone and helped establish G2 as one of EMEA\'s premier VALORANT organisations from the ground up.',
                    'His CS background provided an immediate edge in crosshair placement and fundamentals that elevated G2\'s early VALORANT results significantly above less disciplined peers.'
                ],
                timeline: [
                    { years: '2016–2020', team: 'Various CS:GO orgs (OpTic, CLG, G2)', note: 'Elite CS:GO career — Spain\'s #1 player.' },
                    { years: '2020–Now', team: 'G2 Esports (Valorant)', note: 'EMEA Valorant star, G2 VCT founding cornerstone.' }
                ]
            }
        };

        const playerRealNameOverrides = {
            rw9: 'Mossaad Al-Dossary',
            kiileerrz: 'Abdulaziz Al-Dossary',
            kyxsan: 'Damjan Stoilkovski',
            teses: 'Rene Madsen',
            kyousuke: 'Maxim Lukin',
            imperialhal: 'Phillip Dosen',
            zer0: 'Rhys Perry',
            tgltn: 'James Giezen'
        };

        function playerKey(name) {
            return String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        }

        function getCurrentHubTeamName() {
            const title = document.querySelector('.menu-panel h1');
            return normalizeTeamName(title ? title.textContent : 'Unknown Team') || 'Unknown Team';
        }

        function buildFallbackPlayerProfile(playerName, currentTeam, gameTitle) {
            return {
                achievements: [
                    `Active competitor in ${gameTitle}.`,
                    `Listed in the ${currentTeam} roster on this hub.`,
                    'Player profile is live and ready for future stat expansion.'
                ],
                history: [
                    `${playerName} is currently displayed as part of ${currentTeam}.`,
                    'This profile tracks development, major results, and role evolution.',
                    'Detailed tournament milestones can be expanded anytime.'
                ],
                timeline: [
                    { years: 'Current', team: currentTeam, note: `Active in ${gameTitle}.` }
                ]
            };
        }

        function extractRealNameFromProfile(profile) {
            if (!profile || !Array.isArray(profile.history)) {
                return '';
            }

            for (const line of profile.history) {
                const text = String(line || '').replace(/\s+/g, ' ').trim();
                const fullNameMatch = text.match(/^([A-Za-zÀ-ÖØ-öø-ÿ.'\-\s]+)\s+"[^"]+"\s+([A-Za-zÀ-ÖØ-öø-ÿ.'\-\s]+)/);
                if (fullNameMatch && fullNameMatch[1] && fullNameMatch[2]) {
                    return `${fullNameMatch[1]} ${fullNameMatch[2]}`.replace(/\s+/g, ' ').trim();
                }

                const leftSideMatch = text.match(/^([A-Za-zÀ-ÖØ-öø-ÿ.'\-\s]+)\s+"[^"]+"/);
                if (leftSideMatch && leftSideMatch[1]) {
                    return leftSideMatch[1].replace(/\s+/g, ' ').trim();
                }
            }

            return '';
        }

        function getPlayerIdentity(playerName, profile) {
            const esportsName = String(playerName || 'Unknown Player').replace(/\s+/g, ' ').trim();
            const key = playerKey(esportsName);
            const mappedRealName = playerRealNameOverrides[key] || '';
            const profileRealName = extractRealNameFromProfile(profile);
            const realName = mappedRealName || profileRealName || 'Not publicly listed';
            return {
                esportsName,
                realName
            };
        }

        function openPlayerHub(playerName, gameTitle) {
            const currentTeam = getCurrentHubTeamName();
            const key = playerKey(playerName);
            const profile = playerProfiles[key] || buildFallbackPlayerProfile(playerName, currentTeam, gameTitle);
            const identity = getPlayerIdentity(playerName, profile);

            const displayName = identity.realName !== 'Not publicly listed' ? identity.realName : identity.esportsName;
            playerHubName.textContent = `${displayName} Hub`;
            playerHubSub.textContent = `${currentTeam} • ${gameTitle} • Esports Name: ${identity.esportsName} • Real Name: ${identity.realName}`;

            playerHubAchievements.innerHTML = profile.achievements
                .map((item) => `<li>${item}</li>`)
                .join('');

            playerHubHistory.innerHTML = profile.history
                .map((item) => `<li>${item}</li>`)
                .join('');

            playerHubClubHistory.innerHTML = (Array.isArray(profile.timeline) && profile.timeline.length
                ? profile.timeline.map((row) => `<li>${row.years} • ${row.team}</li>`)
                : [`<li>Current • ${currentTeam}</li>`]
            ).join('');

            playerHubTimeline.innerHTML = profile.timeline
                .map((row) => `
                    <div class="playerhub-timeline-row">
                        <div class="playerhub-years">${row.years}</div>
                        <div class="playerhub-team"><strong>${row.team}</strong> - ${row.note}</div>
                    </div>
                `)
                .join('');

            playerHubModal.classList.add('active');
        }

        function closePlayerHub() {
            playerHubModal.classList.remove('active');
        }

document.getElementById('roster').addEventListener('click', (event) => {
            const playerItem = event.target.closest('li');
            if (!playerItem || playerItem.classList.contains('player-tbd')) {
                return;
            }

            const gameCard = playerItem.closest('.game');
            const gameTitle = gameCard ? gameCard.querySelector('h3').textContent.trim() : 'Unknown Title';
            const playerName = playerItem.textContent.replace(/\s+/g, ' ').trim();
            if (!playerName) {
                return;
            }

            openPlayerHub(playerName, gameTitle);
        });

// Tab functionality for team pages
(function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            tabButtons.forEach(function(btn) { btn.classList.remove('active'); });
            tabPanes.forEach(function(pane) { pane.classList.remove('active'); });
            button.classList.add('active');
            var tabId = button.getAttribute('data-tab');
            var pane = document.getElementById(tabId);
            if (pane) { pane.classList.add('active'); }
        });
    });
})();

// Player hub modal events
(function initPlayerHubModal() {
    var playerHubModal = document.getElementById('playerHubModal');
    var playerHubCloseBtn = document.getElementById('playerHubCloseBtn');
    if (playerHubCloseBtn) {
        playerHubCloseBtn.addEventListener('click', closePlayerHub);
    }
    if (playerHubModal) {
        playerHubModal.addEventListener('click', function(event) {
            if (event.target === playerHubModal) { closePlayerHub(); }
        });
    }
})();
