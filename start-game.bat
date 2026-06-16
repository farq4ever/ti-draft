@echo off
title TI Legends Draft - Game Server
echo.
echo ════════════════════════════════════════════
echo   TI LEGENDS DRAFT
echo   Dota2 全历届TI 前五战队 选秀游戏
echo ════════════════════════════════════════════
echo.
echo   游戏地址: http://localhost:8080
echo   停止服务: 关闭此窗口 或按 Ctrl+C
echo.
echo ════════════════════════════════════════════
echo.
npx --yes serve dist -l 8080 -s --no-clipboard
