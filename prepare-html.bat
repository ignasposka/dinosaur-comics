@echo OFF
pause
powershell -Command "(Get-Content -encoding utf8 prod/index.html) -replace '/dist/bundle.js', 'bundle.js' | Out-File -encoding utf8 prod/index.html"