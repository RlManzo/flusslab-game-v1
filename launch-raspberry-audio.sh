#!/usr/bin/env bash
# THE OLD EVIL V25 — launcher para una instalación dedicada en Raspberry Pi.
# El flag de autoplay es imprescindible porque A llega al navegador por WebSocket.
set -euo pipefail
URL="${THE_OLD_EVIL_URL:-http://localhost:3000}"
if command -v chromium-browser >/dev/null 2>&1; then
  BROWSER=chromium-browser
elif command -v chromium >/dev/null 2>&1; then
  BROWSER=chromium
else
  echo 'Chromium no está instalado o no se encuentra en PATH.' >&2
  exit 1
fi
# Importante: cerrar primero la instancia previa de Chromium; de lo contrario
# la instancia existente puede ignorar los nuevos flags.
exec "$BROWSER" --kiosk --autoplay-policy=no-user-gesture-required "$URL"
