# Quick ngrok setup for metapulse.lol on Windows

## Step 1: Download ngrok
# Visit: https://ngrok.com/download
# Download the Windows ZIP file, extract it to a folder (e.g., C:\ngrok)

## Step 2: Create ngrok auth token
# 1. Go to https://dashboard.ngrok.com/signup (create free account)
# 2. Copy your Auth Token from https://dashboard.ngrok.com/auth
# 3. Run in PowerShell:
# 
#     ngrok config add-authtoken YOUR_TOKEN_HERE
#

## Step 3: Start the tunnel to your local server
# In PowerShell, from the esports-main folder where server.js is running:
#
#     ngrok http 8787 --domain metapulse.lol
#
# (Requires ngrok paid plan to use a custom domain)
#
# OR use a random domain:
#
#     ngrok http 8787
#
# This will show:
#     Forwarding    https://xxxx-xx-xxx-xx-xxx-xx.ngrok.io -> http://localhost:8787
#

## Step 4: Access your app
# Visit the ngrok URL shown above, or:
# https://metapulse.lol (if using custom domain)
#
# The server on your laptop is now publicly accessible!

## Keep it running
# Don't close the ngrok window. It must stay running for the tunnel to work.
# When you close it, the URL becomes inaccessible.

## To make it permanent (optional)
# Use a process manager like PM2:
#     npm install -g pm2
#     pm2 start server.js --name metapulse
#     pm2 startup
#     pm2 save
#
# Then in another terminal:
#     ngrok http 8787 --domain metapulse.lol
