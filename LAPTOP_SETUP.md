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

**Domain not working**
- Custom domains require ngrok Pro (paid plan)
- Use a random domain for free, or point your DNS records manually

## Next Steps

- Deploy to a real VPS if you want it always-on (see nginx.conf for reference)
- Add a PM2 config to auto-restart the server if it crashes
- Set up SSL certificate with Let's Encrypt on VPS
