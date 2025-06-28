# PowerShell script to start the development server
Write-Host "Starting Aum Lenka Portfolio Development Server..." -ForegroundColor Green

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the development server
Write-Host "Starting development server on http://localhost:3000" -ForegroundColor Cyan
npm run dev 