# Windows PowerShell script to start both the server and ngrok tunnel
# Usage: .\start-metapulse.ps1

# Make sure ngrok is installed first from https://ngrok.com/download

# Start the Node.js server in the background
Write-Host "Starting Node.js server on port 8787..." -ForegroundColor Green
$serverProcess = Start-Process -FilePath "node" -ArgumentList "server.js" -PassThru -NoNewWindow

# Wait a moment for server to start
Start-Sleep -Seconds 2

# Start ngrok tunnel
Write-Host "Starting ngrok tunnel..." -ForegroundColor Green
Write-Host "Visit: https://ngrok.com/download to download ngrok if you haven't already" -ForegroundColor Yellow
Write-Host ""
Write-Host "To access from your domain:" -ForegroundColor Cyan
Write-Host "  1. Go to https://dashboard.ngrok.com and create a free account"
Write-Host "  2. Copy your Auth Token and run: ngrok config add-authtoken YOUR_TOKEN"
Write-Host "  3. Use: ngrok http 8787 --domain metapulse.lol" -ForegroundColor Yellow
Write-Host ""
Write-Host "If you don't have a paid plan, use: ngrok http 8787" -ForegroundColor Yellow
Write-Host ""

# Try to launch ngrok (assumes it's in PATH)
try {
    & ngrok http 8787
} catch {
    Write-Host "ngrok not found. Install it from https://ngrok.com/download" -ForegroundColor Red
}
