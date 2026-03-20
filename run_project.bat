@echo off
echo ========================================
echo  Smart Public Transport System v2.0
echo  Andhra Pradesh - Digital India
echo ========================================
echo.
echo [1/3] Initializing database...
node database.js
echo [2/3] Starting server...
echo [3/3] Opening browser...
start "" "http://localhost:3000/PROJECT.html"
node server.js
pause
