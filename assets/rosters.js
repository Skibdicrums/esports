// Roster snapshots are dated individually: they are not a live transfer feed.
window.MetaPulseRosters = (() => {
    const achievements = {
        powr: {
            game: 'PUBG Mobile',
            source: 'https://liquipedia.net/pubgmobile/POWR_eSports',
            titles: [
                '2024-11-05 - Saudi eLeague 2024: Major 4',
                '2022-10-15 - PUBG Mobile Pro League - Middle East & Africa Championship Fall 2022'
            ]
        },
        fnatic: {
            game: 'VALORANT',
            source: 'https://liquipedia.net/valorant/Fnatic',
            titles: [
                '2025-05-18 - VCT 2025: EMEA Stage 1',
                '2024-07-20 - VCT 2024: EMEA Stage 2',
                '2024-05-12 - VCT 2024: EMEA Stage 1',
                '2023-11-05 - Red Bull Home Ground #4',
                '2023-06-25 - VALORANT Masters Tokyo 2023',
                '2023-03-04 - VCT 2023: LOCK//IN São Paulo'
            ]
        },
        teamfalcons: [
            {
                game: 'Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/Team_Falcons',
                titles: [
                    '2026-06-21 - Intel Extreme Masters Cologne Major 2026',
                    '2025-04-13 - PGL Bucharest 2025'
                ]
            },
            {
                game: 'VALORANT',
                source: 'https://liquipedia.net/valorant/Team_Falcons',
                titles: [
                    '2024-07-26 - VALORANT Challengers 2024 MENA: Resilience - LAN Finals',
                    '2024-06-08 - Saudi eLeague 2024: Major 2',
                    '2024-04-06 - Saudi eLeague 2024: Major 1',
                    '2023-10-21 - Saudi eLeague 2023: Season 2',
                    '2023-08-14 - Gamers8 Challenge Zone 2023',
                    '2023-06-09 - VALORANT Challengers 2023 MENA: LAN Finals',
                    '2022-11-26 - Saudi eLeagues 2022: Season 2',
                    '2022-07-23 - Saudi eLeagues 2022: Season 1',
                    '2022-07-07 - VRL 2022 MENA: Resilience Stage 2',
                    '2022-03-25 - VRL 2022 MENA: Resilience Stage 1'
                ]
            }
        ],
        teamvitality: [
            {
                game: 'Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/Team_Vitality',
                titles: [
                    '2026-04-19 - ESL Grand Slam VI',
                    '2026-02-22 - PGL Cluj-Napoca 2026',
                    '2026-02-08 - Intel Extreme Masters Kraków 2026',
                    '2025-12-14 - StarLadder Budapest Major 2025',
                    '2025-11-16 - BLAST Frequent Flyers Program 2025',
                    '2025-06-22 - BLAST.tv Austin Major 2025',
                    '2025-04-27 - ESL Grand Slam Season 5',
                    '2025-02-09 - Intel Extreme Masters Katowice 2025',
                    '2023-12-17 - BLAST Premier: World Final 2023',
                    '2023-05-21 - BLAST.tv Paris Major 2023'
                ]
            },
            {
                game: 'VALORANT',
                source: 'https://liquipedia.net/valorant/Team_Vitality',
                titles: [
                    '2025-02-09 - VCT 2025: EMEA Kickoff',
                    '2022-07-03 - VRL 2022 France: Revolution Stage 2',
                    '2021-11-27 - VALORANT Open Tour: France Finals'
                ]
            },
            {
                game: 'Rocket League',
                source: 'https://liquipedia.net/rocketleague/Team_Vitality',
                titles: [
                    '2023-08-13 - RLCS 2022-23 - World Championship',
                    '2023-07-09 - RLCS 2022-23 - Spring Split Major',
                    '2021-06-20 - RLCS Season X - European Championship',
                    '2019-06-23 - RLCS Season 7 - Finals',
                    '2019-05-12 - RLCS Season 7 - Europe'
                ]
            },
            {
                game: 'Call of Duty: Mobile',
                source: 'https://liquipedia.net/callofduty/Team_Vitality/Mobile',
                titles: [
                    '2024-08-11 - Snapdragon Pro Series Season 5 - India',
                    '2022-08-21 - Call of Duty: Mobile India Challenge: Multiplayer - Season 2'
                ]
            },
            {
                game: 'Call of Duty: Warzone',
                source: 'https://liquipedia.net/callofduty/Team_Vitality/Warzone',
                titles: [
                    '2026-07-14 - Warzone Total Frenzy - Tour de Frags',
                    '2026-06-09 - Warzone Total Frenzy - Return of Fortune\'s Keep'
                ]
            },
            {
                game: 'Vitality.Bee',
                source: 'https://liquipedia.net/leagueoflegends/Vitality.Bee',
                titles: [
                    '2024-10-23 - Coupe de France 2024',
                    '2022-11-11 - Coupe de France 2022',
                    '2020-07-08 - Underdogs 2020',
                    '2018-11-24 - Open Tour France 2018',
                    '2018-10-26 - Etape Capitale 2018'
                ]
            },
            {
                game: 'Rising Bees',
                source: 'https://liquipedia.net/leagueoflegends/Rising_Bees',
                titles: [
                    '2026-11-08 - Nova Series 2026 - Qualifier #1',
                    '2026-10-27 - LGC 2026 Rising',
                    '2026-08-29 - Equal eSports Cup 2026',
                    '2026-07-21 - LGC 2026 Rising - Stage 3',
                    '2026-06-23 - LGC 2026 Rising - Stage 2'
                ]
            }
        ],
        natusvincere: [
            {
                game: 'Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/Natus_Vincere',
                titles: [
                    '2026-05-17 - Intel Extreme Masters Atlanta 2026',
                    '2026-03-15 - ESL Pro League Season 23',
                    '2024-07-21 - Esports World Cup 2024',
                    '2024-03-31 - PGL Major Copenhagen 2024',
                    '2021-12-19 - BLAST Premier: World Final 2021',
                    '2021-11-07 - PGL Major Stockholm 2021',
                    '2021-09-12 - Intel Grand Slam Season 3',
                    '2021-07-18 - Intel Extreme Masters XVI - Cologne',
                    '2021-01-24 - BLAST Premier: Global Final 2020',
                    '2020-03-01 - Intel Extreme Masters XIV - World Championship'
                ]
            },
            {
                game: 'NAVI Junior Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/Natus_Vincere_Junior',
                titles: [
                    '2026-03-07 - United21 Season 45',
                    '2025-06-22 - CCT Season 3 European Series #3',
                    '2025-06-01 - CCT Season 3 European Series #2',
                    '2025-05-07 - Thunderpick World Championship 2025: European Series #1',
                    '2025-04-20 - YaLLa Compass Qatar 2025',
                    '2024-11-09 - HellCup #11',
                    '2024-09-21 - ESEA Season 50: Advanced Division - Europe'
                ]
            },
            {
                game: 'NAVI Javelins Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/NAVI_Javelins',
                titles: [
                    '2024-09-15 - Tradeit League FE Masters #5',
                    '2024-05-19 - Tradeit League FE Masters #3',
                    '2024-04-16 - European Pro League Female Season 1',
                    '2022-12-09 - IESF Female World Esports Championship 2022'
                ]
            },
            {
                game: 'Dota 2',
                source: 'https://liquipedia.net/dota2/Natus_Vincere',
                titles: [
                    '2016-07-24 - StarLadder i-League StarSeries Season 2',
                    '2014-04-15 - Dota 2 Champions League Season 2',
                    '2014-01-19 - StarLadder StarSeries Season 8',
                    '2011-08-21 - The International 2011'
                ]
            },
            {
                game: 'VALORANT',
                source: 'https://liquipedia.net/valorant/Natus_Vincere',
                titles: [
                    '2022-11-27 - G-Loot VALORANT Clash'
                ]
            },
            {
                game: 'NAVI Junior',
                source: 'https://liquipedia.net/valorant/Natus_Vincere_Junior',
                titles: [
                    '2026-07-26 - EVC: The Surge 12'
                ]
            },
            {
                game: 'NAVI Celestials',
                source: 'https://liquipedia.net/valorant/NAVI_Celestials',
                titles: [
                    '2022-08-20 - REBELS Final 2022'
                ]
            },
            {
                game: 'League of Legends',
                source: 'https://liquipedia.net/leagueoflegends/Natus_Vincere',
                titles: [
                    '2012-05-14 - Solomid EU Invitational 1'
                ]
            },
            {
                game: 'NAVI Junior Mobile Legends',
                source: 'https://liquipedia.net/mobilelegends/NAVI_Junior',
                titles: [
                    '2025-02-16 - G2 Arena Championship: Chapter 1'
                ]
            },
            {
                game: 'NAVI PH Mobile Legends',
                source: 'https://liquipedia.net/mobilelegends/Natus_Vincere_PH',
                titles: [
                    '2026-05-22 - Athena Cup Season 2',
                    '2025-06-22 - SIBOL National Team Selection for SEA Games 2025 - Women',
                    '2025-05-25 - Athena League Season 1'
                ]
            },
            {
                game: 'Rainbow Six Siege',
                source: 'https://liquipedia.net/rainbowsix/Natus_Vincere',
                titles: [
                    '2021-04-25 - European League 2021 - Stage 1',
                    '2019-11-23 - ESL Premiership Winter 2019',
                    '2019-11-10 - Pro League Season 10 - Finals'
                ]
            },
            {
                game: 'PUBG Mobile',
                source: 'https://liquipedia.net/pubgmobile/Natus_Vincere',
                titles: [
                    '2021-11-14 - PUBG Mobile Pro League - European Championship Season 1',
                    '2021-08-01 - PUBG Mobile National Championship Russia 2021',
                    '2021-06-27 - PUBG Mobile Pro League - EMEA Championship Season 1',
                    '2020-10-25 - EMEA League 2020'
                ]
            },
            {
                game: 'PUBG (PC)',
                source: 'https://liquipedia.net/pubg/Natus_Vincere',
                titles: [
                    '2026-03-29 - PUBG Global Series 2026 Circuit 1 Series 2',
                    '2022-11-20 - PUBG Global Championship 2022',
                    '2020-03-08 - PGS: Berlin - Europe Finals'
                ]
            },
            {
                game: 'Rocket League',
                source: 'https://liquipedia.net/rocketleague/Natus_Vincere',
                titles: [
                    '2021-10-28 - Italian Rocket Championship Season 7: Serie A - League Play'
                ]
            }
        ],
        furiaesports: [
            {
                game: 'Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/FURIA/Results',
                titles: [
                    '2026-11-15 - BLAST Rivals Fall 2026',
                    '2026-10-31 - PGL Masters Bucharest 2026',
                    '2026-10-18 - Thunderpick World Championship 2026',
                    '2025-11-16 - BLAST Rivals Fall 2025',
                    '2025-11-09 - Intel Extreme Masters Chengdu 2025',
                    '2025-10-19 - Thunderpick World Championship 2025',
                    '2025-09-21 - FISSURE Playground #2',
                    '2023-12-03 - Elisa Masters Espoo 2023',
                    '2023-10-15 - BGS Esports 2023',
                    '2023-04-09 - BLAST.tv Paris Major 2023: American RMR',
                    '2022-04-14 - PGL Major Antwerp 2022: American RMR',
                    '2021-10-10 - Intel Extreme Masters XVI - Fall: North America',
                    '2021-07-04 - Elisa Invitational Summer 2021',
                    '2020-10-18 - Intel Extreme Masters XV - New York Online: North America',
                    '2020-09-27 - ESL Pro League Season 12: North America',
                    '2020-08-16 - DreamHack Open Summer 2020: North America',
                    '2020-06-14 - DreamHack Masters Spring 2020: North America',
                    '2019-09-14 - Arctic Invitational 2019',
                    '2019-07-26 - EMF CS:GO World Invitational 2019',
                    '2019-07-14 - ESEA Season 31: Global Challenge',
                    '2019-07-12 - ESEA Season 31: Premier Division - North America Final',
                    '2019-05-11 - ESL One: Cologne 2019 - North American Qualifier',
                    '2019-04-28 - Esports Championship Series Season 7 - North America: Series 3',
                    '2019-04-01 - ESEA Season 30: Premier Division - North America',
                    '2019-03-24 - DreamHack Masters Dallas 2019: North American Qualifier',
                    '2018-08-22 - EPICENTER 2018 - Wild Card: Americas Qualifier - Open Qualifier #1',
                    '2018-06-09 - ESL Brasil Premier League Season 5',
                    '2018-05-30 - Gamers Club Liga Profissional: May 2018',
                    '2018-05-27 - Americas Minor Championship - London 2018: SA Open Qualifier #2',
                    '2018-05-18 - Aorus League - Invitational',
                    '2018-05-14 - GG.BET Ascensão',
                    '2018-05-08 - Gamers Club Liga Profissional: April 2018',
                    '2018-03-31 - Aorus League - Brazil: Finals - Season 1'
                ]
            },
            {
                game: 'PUBG Mobile',
                source: 'https://liquipedia.net/pubgmobile/FURIA_Esports',
                titles: [
                    '2026-05-17 - PUBG Mobile Global Open 2026 Season 1 - South America Finals'
                ]
            },
            {
                game: 'Rocket League',
                source: 'https://liquipedia.net/rocketleague/FURIA/Results',
                titles: [
                    '2026-03-29 - RLCS 2026 - Paris Major: SAM Open 4',
                    '2026-02-01 - RLCS 2026 - Boston Major: SAM Open 3',
                    '2025-11-23 - RLCS 2026 - Boston Major: SAM Open 1',
                    '2025-11-01 - eBrasileirão 2025 - Grand Final',
                    '2025-06-01 - RLCS 2025 - Raleigh Major: SAM Open 6',
                    '2025-05-19 - RLCS 2025 - Raleigh Major: SAM Open 5',
                    '2025-02-23 - RLCS 2025 - Birmingham Major: SAM Open 3',
                    '2025-02-02 - RLCS 2025 - Birmingham Major: SAM Open 2',
                    '2025-01-12 - RLCS 2025 - Birmingham Major: SAM Open 1',
                    '2024-12-23 - Offseason Open - 3v3: SAM',
                    '2024-11-30 - Login Championship',
                    '2024-10-06 - FIFAe World Cup 2024 - Brazil Qualifier',
                    '2024-07-14 - Esports World Cup 2024 Community Cup: South America',
                    '2024-04-28 - RLCS 2024 - Major 2: SAM Open Qualifier 4',
                    '2024-04-18 - Duds Challenge: Season 1',
                    '2024-03-03 - RLCS 2024 - Major 1: SAM Open Qualifier 3',
                    '2024-02-18 - RLCS 2024 - Major 1: SAM Open Qualifier 2',
                    '2023-11-19 - Rocket Street LATAM Championship 2023 - Brazil: Event 3',
                    '2023-10-29 - Rocket Street LATAM Championship 2023 - Brazil: Event 2',
                    '2023-10-08 - Rocket Street LATAM Championship 2023 - Brazil: Event 1',
                    '2023-06-18 - RLCS 2022-23 - Spring: NA Regional 3 - Spring Invitational',
                    '2023-04-22 - SteelSeries Cup',
                    '2022-06-05 - RLCS 2021-22 - Spring: SAM Regional Event 3',
                    '2022-05-22 - RLCS 2021-22 - Spring: SAM Regional Event 2',
                    '2022-02-27 - RLCS 2021-22 - Winter: SAM Regional Event 3',
                    '2022-02-06 - RLCS 2021-22 - Winter: SAM Regional Event 2',
                    '2021-12-06 - retals: Sweden Skirmish',
                    '2021-11-20 - RLCS 2021-22 - Fall: SAM Regional Event 3',
                    '2021-10-24 - RLCS 2021-22 - Fall: SAM Regional Event 1',
                    '2021-04-25 - RLCS Season X - Spring: SAM Grand Series Event 2'
                ]
            },
            {
                game: 'VALORANT',
                source: 'https://liquipedia.net/valorant/FURIA',
                titles: [
                    '2026-02-13 - VCT 2026: Americas Kickoff',
                    '2024-12-15 - Tixinha Invitational',
                    '2023-11-05 - Multiplatform Esports Game 2023',
                    '2021-10-17 - VCT 2021: South America Last Chance Qualifier'
                ]
            }
        ],
        furiafemale: {
            game: 'FURIA Female Counter-Strike 2',
            source: 'https://liquipedia.net/counterstrike/FURIA_Female/Results',
            titles: [
                '2025-05-25 - ESL Impact League Season 7',
                '2024-12-01 - Rainhas do Clutch FERJEE 2024',
                '2024-10-12 - BGS Esports 2024 Female',
                '2024-09-29 - Gamers Club Liga Feminina: Super Cup 2024',
                '2024-07-21 - Gamers Club Liga Feminina: 1st Edition 2024',
                '2024-03-16 - ESL Impact Cash Cup 2024: South America #6',
                '2024-03-03 - GIRLGAMER Esports Festival 2023: Mexico City',
                '2024-02-25 - ESL Impact Cash Cup 2024: South America #4',
                '2023-11-18 - Gamers Club Masters Feminina VIII',
                '2023-10-22 - Gamers Club Liga Feminina: Super Edition 2023',
                '2023-10-12 - BGS Esports 2023 Female',
                '2023-05-28 - Gamers Club Liga Feminina: 2nd Edition 2023',
                '2023-01-15 - ESL Impact Cash Cup: South America - Winter 2023 #1',
                '2022-10-08 - BGS Esports 2022 Female',
                '2022-09-11 - Gamers Club Liga Feminina: 3rd Edition 2022',
                '2022-08-07 - Gamers Club Masters Feminina V',
                '2022-07-30 - ESL Impact Cash Cup: South America - Summer 2022 #3',
                '2022-07-23 - ESL Impact Cash Cup: South America - Summer 2022 #2',
                '2022-07-21 - Ela Faz o Game',
                '2022-06-17 - Aorus League 2022 Season 1: Female',
                '2022-04-23 - ESL Impact Cash Cup: South America - Spring 2022 #3',
                '2022-04-14 - BGS Esports 2022 Female Bomb A',
                '2022-04-10 - Gamers Club Liga Feminina: 1st Edition 2022',
                '2022-02-27 - ESEA Female Cash Cup: South America - Winter 2022 #4',
                '2022-02-13 - ESEA Female Cash Cup: South America - Winter 2022 #3',
                '2021-11-20 - Gamers Club Masters Feminina IV',
                '2021-10-03 - Gamers Club Liga Feminina: 4th Edition 2021',
                '2021-09-23 - BGS Esports 2021 Female',
                '2021-09-05 - Gamers Club Liga Feminina: 3rd Edition 2021',
                '2021-08-29 - Grrrls League 2021: Split #2',
                '2021-06-11 - Aorus League 2021 Season 2: Female',
                '2021-05-23 - Gamers Club Liga Feminina: 2nd Edition 2021',
                '2021-04-18 - Gamers Club Liga Feminina: 1st Edition 2021',
                '2021-03-14 - Aorus League 2021 Season 1: Female',
                '2021-03-06 - WESG 2021 Female Latin America: Brazil',
                '2020-12-13 - Gamers Club Masters Feminina II',
                '2020-09-20 - Gamers Club Liga Feminina: 3rd Quarter 2020',
                '2020-08-16 - Gamers Club Masters Feminina I',
                '2020-07-05 - Girl Power Invitational',
                '2020-04-26 - Gamers Club Liga Feminina: 2nd Quarter 2020',
                '2020-03-24 - Gamers Club Liga Feminina: 1st Quarter 2020'
            ]
        },
        furiaacademy: {
            game: 'Counter-Strike 2',
            source: 'https://liquipedia.net/counterstrike/FURIA_Academy/Results',
            titles: [
                '2023-06-11 - CBCS 2023 Season 1: Open Qualifier #2',
                '2023-04-23 - TG Rush Autumn 2023: Open Qualifier #2',
                '2023-04-20 - RedZone PRO League 2023 Season 2',
                '2023-03-18 - FiReLEAGUE Academy 2023',
                '2023-02-17 - RedZone PRO League 2023 Season 1',
                '2022-05-09 - Gamers Club Liga Série B: April 2022',
                '2022-04-07 - BGS Esports 2022 Bomb A',
                '2021-11-10 - RedZone PRO League 2021 Season 6',
                '2021-10-28 - Gamers Club Liga Série B: October 2021',
                '2021-07-11 - RedZone PRO League 2021 Season 3',
                '2021-01-14 - WESG 2021 Latin America: Brazil - Last Chance Qualifier',
                '2020-09-17 - Logitech G Challenge 2020 - Brazil',
                '2019-11-24 - Gamers Club Liga Profissional: November 2019'
            ]
        },
        twistedminds: {
            game: 'PUBG (PC)',
            source: 'https://liquipedia.net/pubg/Twisted_Minds',
            titles: [
                '2026-11-01 - PUBG Global Series 2026 Circuit 4 Series Final',
                '2025-10-19 - PUBG Global Series 9 2025',
                '2025-08-16 - Esports World Cup 2025',
                '2024-11-10 - PUBG Global Series 6 2024',
                '2024-10-27 - PUBG Global Series 5 2024',
                '2024-06-09 - PUBG Global Series 4 2024',
                'PUBG Global Series 12 2026 - achievement badge; may overlap with the Circuit 4 Series Final',
                'PUBG EMEA Championship 2024: Fall - achievement badge; date not shown',
                'PUBG EMEA Championship 2024: Spring - achievement badge; date not shown',
                'PUBG EMEA Championship 2023: Fall - achievement badge; date not shown',
                'The Rotation - achievement badge; date not shown'
            ]
        },
        teamliquid: [
            {
                game: 'VALORANT',
                source: 'https://liquipedia.net/valorant/Team_Liquid/Results',
                titles: [
                    '2025-08-31 - VCT 2025: EMEA Stage 2',
                    '2023-05-28 - VCT 2023: EMEA League',
                    '2022-08-14 - VCT 2022: EMEA Last Chance Qualifier',
                    '2021-11-07 - Red Bull Home Ground #2',
                    '2021-10-17 - VCT 2021: EMEA Last Chance Qualifier',
                    '2021-08-01 - VCT 2021: Europe Stage 3 Challengers 2',
                    '2021-05-02 - VCT 2021: EMEA Stage 2 Challengers Finals'
                ]
            },
            {
                game: 'Counter-Strike 2',
                source: 'https://liquipedia.net/counterstrike/Team_Liquid/Results',
                titles: [
                    '2026-09-27 - iBUYPOWER Masters fl0m\'s Mythical LAN 2026',
                    '2026-09-12 - PGL Masters Bucharest 2026: North American Qualifier',
                    '2024-09-02 - Intel Extreme Masters Rio 2024: North American Qualifier',
                    '2024-02-27 - Intel Extreme Masters Dallas 2024: North American Qualifier',
                    '2024-02-23 - Intel Extreme Masters Dallas 2024: North American Open Qualifier #1',
                    '2024-01-17 - Intel Extreme Masters Chengdu 2024: North American Open Qualifier #1',
                    '2024-01-10 - PGL Major Copenhagen 2024: North American Open Qualifier #1',
                    '2022-10-09 - Intel Extreme Masters Road to Rio 2022: American RMR',
                    '2022-04-24 - Intel Extreme Masters XVII - Dallas: North American Qualifier',
                    '2021-05-30 - cs_summit 8',
                    '2020-04-12 - ESL Pro League Season 11: North America',
                    '2019-10-24 - Esports Championship Series Season 8 - North America: Series 4',
                    '2019-07-21 - Intel Extreme Masters XIV - Chicago',
                    '2019-07-14 - BLAST Pro Series: Los Angeles 2019',
                    '2019-07-07 - ESL One: Cologne 2019',
                    '2019-06-23 - ESL Pro League Season 9 - Finals',
                    '2019-06-17 - GG.Bet Cologne Invitational',
                    '2019-06-02 - DreamHack Masters Dallas 2019',
                    '2019-05-05 - Intel Extreme Masters XIV - Sydney',
                    '2019-01-20 - iBUYPOWER Masters IV',
                    '2018-12-02 - SuperNova Malta 2018',
                    '2018-02-11 - cs_summit 2',
                    '2018-02-03 - StarLadder i-League StarSeries Season 4 - North American Qualifier',
                    '2017-11-05 - Americas Minor Championship - Boston 2018',
                    '2017-10-11 - EPICENTER 2017 - Americas Closed Qualifier',
                    '2017-05-20 - ESL One: Cologne 2017 - North American Closed Qualifier',
                    '2015-09-13 - iBUYPOWER Invitational 2015 - Fall',
                    '2015-09-11 - PGL CS:GO Championship Series Season 1: North American Division',
                    '2015-05-31 - ESWC 2015 - MSI USA Qualifier',
                    '2015-04-02 - RGN Intercontinental Open 2 North America'
                ]
            }
        ],
        t1: {
            game: 'Counter-Strike 2',
            source: 'https://liquipedia.net/counterstrike/T1/Results',
            label: 'No T1 Counter-Strike team or tournament results could be verified; the Liquipedia results page has no content.',
            titles: []
        }
    };
    const snapshots = {
        powr: {
            'PUBG Mobile': {
                players: ['KANTE', 'RAGNAR'],
                date: '2026-11-12',
                source: 'https://liquipedia.net/pubgmobile/POWR_eSports',
                label: 'Liquipedia lists two active players; full lineup not confirmed'
            }
        },
        teamfalcons: {
            'Counter-Strike 2': {
                players: ['karrigan', 'm0NESY', 'kyousuke', 'NiKo', 'TeSeS'],
                date: '2026-11-12',
                source: 'https://liquipedia.net/counterstrike/Team_Falcons'
            },
            Valorant: {
                players: [],
                date: '2024-08-05',
                source: 'https://liquipedia.net/valorant/Team_Falcons',
                status: 'disbanded',
                label: 'Division disbanded on 2024-08-05'
            },
            'Rocket League': {
                players: ['dralii', 'Kiileerrz', 'Rw9'],
                date: '2026-11-12',
                source: 'https://liquipedia.net/rocketleague/Team_Falcons'
            }
        },
        furiaesports: {
            'Counter-Strike 2': {
                players: ['yuurih', 'KSCERATO', 'FalleN', 'molodoy', 'YEKINDAR'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/FURIA'
            },
            Valorant: {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/valorant/FURIA',
                status: 'disbanded',
                label: 'FURIA disbanded its VALORANT division on 2026-11-02; no active roster is listed'
            },
            'PUBG Mobile': {
                players: ['Ayala', 'Chieff', 'Higor', 'Silence'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/pubgmobile/FURIA_Esports'
            },
            'Rocket League': {
                players: ['yANXNZ', 'swiftt.', 'kv1'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/rocketleague/FURIA'
            }
        },
        furiafemale: {
            'FURIA Female Counter-Strike 2': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/FURIA_Female',
                status: 'disbanded',
                label: 'Disbanded'
            }
        },
        furiaacademy: {
            'Counter-Strike 2': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/FURIA_Academy',
                status: 'no-active-players',
                label: 'Liquipedia lists no active players; msr is listed as coach'
            }
        },
        cloud9: {
            Valorant: {
                players: ['FireBallOps', 'GLYPH', 'alym', 'Derrek', 'nightz'],
                date: '2026-11-08',
                source: 'https://www.vlr.gg/786593/cloud9-adds-alym-derrek-nightz-to-complete-2027-roster',
                label: 'Announced 2027 roster'
            }
        },
        edwardgaming: {
            Valorant: {
                players: ['nobody', 'ZmjjKK', 'CHICHOO', 'Jieni7', 'stew', 'zjc'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/1120/edward-gaming',
                label: 'zjc is listed as a substitute'
            }
        },
        allgamers: {
            Valorant: {
                players: ['Shr1mp', 'K1ra', 'f4ngeer', 'iamgrq'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/1119/all-gamers',
                label: 'Incomplete roster'
            }
        },
        teamvitality: {
            'Counter-Strike 2': {
                players: ['apEX', 'ZywOo', 'flameZ', 'mezii', 'ropz'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/Team_Vitality'
            },
            Valorant: {
                players: ['Sayonara', 'Chronicle', 'Jamppi', 'PROFEK', 'jawgemo'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/valorant/Team_Vitality'
            },
            'Rocket League': {
                players: ['diaz', 'nass', 'Oski'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/rocketleague/Team_Vitality'
            },
            'League of Legends': {
                players: ['Naak Nako', 'FIESTA', 'Fleshy'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/leagueoflegends/Team_Vitality',
                label: 'Incomplete roster; no Jungler or Bot is listed'
            },
            'EA Sports FC': {
                players: ['HHezerS', 'Levi de Weerd'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/easportsfc/Team_Vitality',
                label: 'Page marks the division disbanded on 2026-08-11 but lists these players as active after joining on 2026-09-24'
            },
            'Call of Duty: Mobile': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/callofduty/Team_Vitality/Mobile',
                status: 'disbanded',
                label: 'Division disbanded on 2025-02-18'
            },
            'Call of Duty: Warzone': {
                players: ['Sage', 'Skullface'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/callofduty/Team_Vitality/Warzone',
                label: 'Incomplete roster; zSmit is listed as RFA'
            },
            'Vitality.Bee': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/leagueoflegends/Vitality.Bee',
                status: 'disbanded',
                label: 'Vitality.Bee disbanded on 2026-10-09'
            },
            'Rising Bees': {
                players: ['owpi', 'Delicate', 'rym', 'Cosmïc', 'Honda'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/leagueoflegends/Rising_Bees'
            }
        },
        natusvincere: {
            'Counter-Strike 2': {
                players: ['Aleksib', 'b1t', 'iM', 'w0nderful', 'Makazze'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/Natus_Vincere'
            },
            'NAVI Junior Counter-Strike 2': {
                players: ['kodak', 'Yoki', 'FAZERY', 'MahaR', 'skizzyee'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/Natus_Vincere_Junior',
                label: 'NAVI Junior Counter-Strike academy team'
            },
            'NAVI Javelins Counter-Strike 2': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/NAVI_Javelins',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'Dota 2': {
                players: ['gotthejuice', 'Niku', 'pma', 'daze', 'Riddys'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/dota2/Natus_Vincere'
            },
            Valorant: {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/valorant/Natus_Vincere',
                label: 'Main roster left on 2026-10-28; division is not confirmed disbanded'
            },
            'NAVI Junior': {
                players: ['avey', 'Darxcio', 'Javelin', 'Kolosha', 'sizovskyy'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/valorant/Natus_Vincere_Junior',
                label: 'NAVI VALORANT academy team'
            },
            'NAVI Celestials': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/valorant/NAVI_Celestials',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'League of Legends': {
                players: ['Maynter', 'Rhilech', 'Poby', 'SamD', 'Parus'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/leagueoflegends/Natus_Vincere'
            },
            'Rainbow Six Siege': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/rainbowsix/Natus_Vincere',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'PUBG Mobile': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/pubgmobile/Natus_Vincere',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'PUBG (PC)': {
                players: ['Feyerist', 'Hakatory', 'boost1k-', 'spyrro'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/pubg/Natus_Vincere'
            },
            'Apex Legends': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/apexlegends/Natus_Vincere',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'StarCraft II': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/starcraft2/Natus_Vincere',
                status: 'suspended',
                label: 'Roster suspended on 2024-10-10'
            },
            Hearthstone: {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/hearthstone/Natus_Vincere',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'Mobile Legends': {
                players: ['Karss', 'Febbb', 'Andoryuuu', 'Joshua', 'Jiizee', 'Zeonn', 'Aprho'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/mobilelegends/Natus_Vincere'
            },
            'NAVI Junior Mobile Legends': {
                players: ['DAVIANNN', 'Ren', 'Kell', 'Kazeemen'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/mobilelegends/NAVI_Junior',
                label: 'NAVI Junior Mobile Legends academy team'
            },
            'NAVI PH Mobile Legends': {
                players: ['Ayanami', 'Keishi', 'Rain', 'Cadburiyan', 'Rianne', 'Meraaay'],
                date: '2026-11-15',
                source: 'https://liquipedia.net/mobilelegends/Natus_Vincere_PH',
                label: "NAVI Philippines women's team"
            },
            'NAVI MY Mobile Legends': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/mobilelegends/Natus_Vincere_MY',
                status: 'disbanded',
                label: 'Disbanded'
            },
            'Rocket League': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/rocketleague/Natus_Vincere',
                status: 'disbanded',
                label: 'Disbanded'
            }
        },
        geng: {
            'League of Legends': {
                players: ['Kiin', 'Canyon', 'Chovy', 'Ruler', 'Duro'],
                date: '2026-11-12',
                source: 'https://mid.gg/esports/teams/gen-g'
            }
        },
        g2esports: {
            'League of Legends': {
                players: ['BrokenBlade', 'SkewMond', 'Caps', 'Hans Sama', 'Labrov'],
                date: '2026-11-12',
                source: 'https://mid.gg/esports/teams/g2-esports'
            },
            'Counter-Strike 2': {
                players: ['huNter-', 'NertZ', 'r1nkle', 'HeavyGod', 'MATYS'],
                date: '2026-11-11',
                source: 'https://esport.vision/cs2/team/3210-g2'
            },
            Valorant: {
                players: ['trent', 'leaf'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/11058/g2-esports',
                label: 'Incomplete roster; remaining players not confirmed'
            }
        },
        fnatic: {
            Valorant: {
                players: ['kaajak', 'Cloud'],
                date: '2026-11-12',
                source: 'https://liquipedia.net/valorant/Fnatic',
                label: 'Liquipedia lists two active players'
            }
        },
        gentlemates: {
            Valorant: {
                players: [],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/12694/gentle-mates',
                label: 'Current active lineup not confirmed; VLR lists bipo as an inactive substitute'
            }
        },
        mouz: {
            'Counter-Strike 2': {
                players: ['xertioN', 'torzsi', 'Spinx', 'PR', 'xelex'],
                date: '2026-11-12',
                source: 'https://cs2legends.com/teams/mouz'
            }
        },
        heroic: {
            'Counter-Strike 2': {
                players: ['nilo', 'susp', 'Chr1zN', 'MartinezSa', 'Brollan'],
                date: '2026-10-01',
                source: 'https://www.hltv.org/news/45602/snappi-takes-over-as-heroic-coach'
            }
        },
        teamliquid: {
            'Counter-Strike 2': {
                players: ['JT', 'NAF', 'EliGE', 'malbsMd', 'Jorko'],
                date: '2026-11-02',
                source: 'https://esport.vision/cs2/team/3213-liquid'
            },
            Valorant: {
                players: ['kamo', 'GSR'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/474/team-liquid',
                label: 'Incomplete roster; nAts is listed as inactive'
            }
        },
        sentinels: {
            Valorant: {
                players: ['johnqt', 'OXY', 'brawk', 'canezerra', 'Zellsis'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/788401/sentinels-release-cortezia-and-reduxx',
                label: 'Incomplete starting lineup; Zellsis is a substitute'
            }
        },
        nrgesports: {
            Valorant: {
                players: ['Ethan', 'mada', 'skuba'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/team/1034/nrg',
                label: 'Incomplete roster; remaining players not confirmed'
            }
        },
        teamspirit: {
            'Counter-Strike 2': {
                players: ['zont1x', 'sh1ro', 'tN1R', 'magixx', 'donk'],
                date: '2026-11-11',
                source: 'https://blast.tv/cs/team/80b609cb/spirit'
            },
            'Dota 2': {
                players: ['Yatoro', 'Larl', 'Batyuk', 'not me', 'rue'],
                date: '2026-11-12',
                source: 'https://liquipedia.net/dota2/Team_Spirit'
            }
        },
        virtuspro: {
            'Counter-Strike 2': {
                players: ['mir', 'b1st', 'AquaRS', 'tO0RO', 'Patsi'],
                date: '2026-11-10',
                source: 'https://www.hltv.org/news/45957/virtuspro-sign-patsi'
            }
        },
        twistedminds: {
            'PUBG (PC)': {
                players: ['BatulinS', 'Lu', 'Perfect1ks', 'xmpl'],
                date: '2026-11-01',
                source: 'https://liquipedia.net/pubg/Twisted_Minds'
            },
            'Rainbow Six Siege': {
                players: ['Hashom', 'Jlad', 'Tr1ixd', 'BlaZ', 'Mowwwgli'],
                date: '2026-10-26',
                source: 'https://www.ubisoft.com/en-ca/esports/rainbow-six/siege/team/266/roster'
            }
        },
        t1: {
            'Counter-Strike 2': {
                players: [],
                date: '2026-11-15',
                source: 'https://liquipedia.net/counterstrike/T1/Results',
                status: 'not-verified',
                label: 'No T1 Counter-Strike team or roster could be verified'
            },
            Valorant: {
                players: ['stax', 'TenZ', 'BuZz', 'iZu', 'crashies'],
                date: '2026-11-12',
                source: 'https://www.vlr.gg/789198/the-king-returnz-tenz-returns-to-competitive-play-with-t1',
                label: 'Announced 2027 roster'
            },
            'League of Legends': {
                players: ['Doran', 'Oner', 'Faker', 'Peyz', 'Keria'],
                date: '2026-11-12',
                source: 'https://mid.gg/esports/teams/t1'
            }
        }
    };

    function key(value) {
        const normalized = String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const aliases = { falcons: 'teamfalcons', furia: 'furiaesports', vitality: 'teamvitality', agallgamers: 'allgamers', nrg: 'nrgesports' };
        return aliases[normalized] || normalized;
    }

    function gameKey(title) {
        const value = String(title || '').toLowerCase();
        if (value.includes('furia female') && (value.includes('counter-strike') || value.includes('cs2'))) return 'FURIA Female Counter-Strike 2';
        if (value.includes('navi javelins') && (value.includes('counter-strike') || value.includes('cs2'))) return 'NAVI Javelins Counter-Strike 2';
        if (value.includes('navi junior') && (value.includes('counter-strike') || value.includes('cs2'))) return 'NAVI Junior Counter-Strike 2';
        if (value.includes('counter-strike') || value.includes('cs2')) return 'Counter-Strike 2';
        if (value.includes('navi ph')) return 'NAVI PH Mobile Legends';
        if (value.includes('navi my')) return 'NAVI MY Mobile Legends';
        if (value.includes('navi junior') && value.includes('mobile legends')) return 'NAVI Junior Mobile Legends';
        if (value.includes('navi junior')) return 'NAVI Junior';
        if (value.includes('navi celestials')) return 'NAVI Celestials';
        if (value.includes('valorant')) return 'Valorant';
        if (value.includes('rising bees')) return 'Rising Bees';
        if (value.includes('vitality.bee')) return 'Vitality.Bee';
        if (value.includes('league of legends')) return 'League of Legends';
        if (value.includes('warzone')) return 'Call of Duty: Warzone';
        if ((value.includes('call of duty') && value.includes('mobile')) || value.includes('codm')) return 'Call of Duty: Mobile';
        if (value.includes('ea sports fc') || value.includes('ea fc') || value.includes('fifa')) return 'EA Sports FC';
        if (value.includes('rocket league')) return 'Rocket League';
        if (value.includes('rainbow six')) return 'Rainbow Six Siege';
        if (value.includes('dota 2')) return 'Dota 2';
        if (value.includes('pubg mobile')) return 'PUBG Mobile';
        if (value.includes('pubg')) return 'PUBG (PC)';
        return title;
    }

    function render(teamName, roster) {
        if (!roster) return;
        const team = snapshots[key(teamName)] || {};
        roster.querySelectorAll('[data-roster-added], [data-roster-note]').forEach((el) => el.remove());
        const represented = new Set();
        roster.querySelectorAll('.game').forEach((card) => {
            if (card.id === 'unconfirmedRostersCard') {
                card.style.display = 'none';
                return;
            }
            const title = card.querySelector('h3');
            const list = card.querySelector('ul');
            if (!title || !list || card.style.display === 'none') return;
            const game = gameKey(title.textContent);
            const snapshot = team[game];
            represented.add(game);
            updateCard(card, list, snapshot);
        });
        Object.entries(team).forEach(([game, snapshot]) => {
            if (represented.has(game)) return;
            const card = document.createElement('div');
            card.className = 'game';
            card.dataset.rosterAdded = 'true';
            const title = document.createElement('h3');
            title.textContent = game;
            const list = document.createElement('ul');
            card.append(title, list);
            roster.appendChild(card);
            updateCard(card, list, snapshot);
        });
    }

    function updateCard(card, list, snapshot) {
        card.dataset.rosterVerified = snapshot && snapshot.players.length ? 'true' : 'false';
        const note = document.createElement('p');
        note.dataset.rosterNote = 'true';
        note.style.cssText = 'font-size:13px;color:#b9c9d0;margin:8px 0;';
        if (snapshot) {
            const players = snapshot.players.map((name) => {
                const item = document.createElement('li');
                item.textContent = name;
                return item;
            });
            if (!players.length) {
                const item = document.createElement('li');
                item.className = 'player-tbd';
                item.textContent = snapshot.status === 'disbanded'
                    ? 'Division disbanded; no active roster'
                    : snapshot.status === 'suspended'
                        ? 'Roster suspended; no active roster'
                        : snapshot.status === 'no-active-players'
                            ? 'No active players listed'
                            : snapshot.status === 'not-verified'
                                ? 'No Counter-Strike team or roster could be verified'
                                : 'Current roster not verified';
                players.push(item);
            }
            list.replaceChildren(...players);
            note.append(`${snapshot.label ? `${snapshot.label}; s` : 'S'}ource dated or checked ${snapshot.date}; later changes may not be reflected. `);
            const link = document.createElement('a');
            link.href = snapshot.source;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = new URL(snapshot.source).hostname === 'liquipedia.net' ? 'Liquipedia' : 'Source';
            link.style.color = '#9bf7ff';
            note.appendChild(link);
        } else {
            const item = document.createElement('li');
            item.className = 'player-tbd';
            item.textContent = 'Current roster not verified';
            list.replaceChildren(item);
            note.textContent = 'No verified current roster available.';
        }
        card.appendChild(note);
    }

    function find(teamName, gameTitle, playerName) {
        const team = snapshots[key(teamName)] || {};
        const snapshot = team[gameKey(gameTitle)];
        return snapshot && snapshot.players.some((player) => key(player) === key(playerName))
            ? snapshot
            : null;
    }

    function renderAchievements(teamName, pane) {
        if (!pane) return;
        pane.querySelectorAll('[data-achievements-note]').forEach((el) => el.remove());
        const snapshot = achievements[key(teamName)];
        const entries = Array.isArray(snapshot) ? snapshot : snapshot ? [snapshot] : [];
        const list = pane.querySelector('.achievements-list');
        if (!list) return;

        if (entries.length) {
            list.replaceChildren(...entries.flatMap((entry) => entry.titles.map((title) => {
                const item = document.createElement('li');
                item.textContent = `${entry.game}: ${title}`;
                return item;
            })));
        } else {
            list.replaceChildren();
        }

        const note = document.createElement('p');
        note.dataset.achievementsNote = 'true';
        note.style.cssText = 'font-size:13px;color:#b9c9d0;margin:12px 0;';
        const entriesWithTitles = entries.filter((entry) => entry.titles.length);
        const entriesWithoutTitles = entries.filter((entry) => !entry.titles.length);
        if (entriesWithTitles.length) {
            note.append('Wins shown on the supplied page(s); extended results may not be included. ');
            entriesWithTitles.forEach((entry, index) => {
                if (index) note.append(' · ');
                const link = document.createElement('a');
                link.href = entry.source;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.style.color = '#9bf7ff';
                link.textContent = `Liquipedia (${entry.game})`;
                note.appendChild(link);
            });
        }
        entriesWithoutTitles.forEach((entry) => {
            if (note.textContent) note.append(' ');
            note.append(entry.label || `No sourced tournament wins are listed for ${entry.game}. `);
            const link = document.createElement('a');
            link.href = entry.source;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.style.color = '#9bf7ff';
            link.textContent = `Liquipedia (${entry.game})`;
            note.append(' ');
            note.appendChild(link);
        });
        if (!entries.length) {
            note.textContent = 'No sourced tournament wins have been added for this club yet.';
        }
        list.after(note);
    }

    return { render, find, renderAchievements };
})();
