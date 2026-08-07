@echo off
echo =============================================
echo Church Finance Management System Starting...
echo =============================================

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed on this computer!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b
)

:: Start the server in the background
start /b node server.js

:: Wait for the server to spin up
timeout /t 2 /nobreak > nul

:: Open in the default browser
start http://localhost:3000
