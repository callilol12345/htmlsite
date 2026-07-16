@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 (
  start "KI im Alltag - lokaler Server" py -m http.server 8000 --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:8000/index.html"
  exit /b 0
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "KI im Alltag - lokaler Server" python -m http.server 8000 --bind 127.0.0.1
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:8000/index.html"
  exit /b 0
)

echo Python wurde nicht gefunden.
echo Oeffne den Ordner alternativ mit der VS-Code-Erweiterung "Live Server".
pause
