# THE OLD EVIL V24 — AUDIO AL PRESIONAR A

Base: V23. Conserva las tres grabaciones originales, la música Arcade Battle Theme y las mecánicas existentes.

## Flujo
1. El jugador vincula el celular por QR y presiona START.
2. Aparece el prólogo, sin música.
3. El jugador presiona A. El prólogo se cierra, se inicia el gameplay y el juego llama `unlockAudio()` / `syncMusic()` inmediatamente.
4. La música empieza en loop y las voces se reproducen con sus eventos originales. Pausa, muerte y modales mantienen sus reglas de silencio.

## IMPORTANTE: política de autoplay de Chromium

La pulsación A llega al navegador del televisor por WebSocket. **No cuenta como una interacción local de usuario** a efectos de la política de autoplay. Por tanto, en Chrome/Chromium normal la llamada `play()` puede ser rechazada (NotAllowedError). Ningún cambio de JavaScript en el receptor convierte un mensaje WebSocket en un gesto confiable.

Para una instalación dedicada en Raspberry Pi, iniciar Chromium con:

    chromium-browser --kiosk --autoplay-policy=no-user-gesture-required http://localhost:3000

En algunas distribuciones el ejecutable se llama `chromium` en lugar de `chromium-browser`. Adaptar el URL/puerto al que use el servidor real y añadir el flag al lanzador existente; no ejecutar dos instancias de Chromium a la vez. **Este ZIP no modifica la configuración del sistema**.

Si se abre el juego en Chrome convencional, el botón de emergencia "ENABLE SOUND (OPERATOR)" aparece solo si el navegador rechaza el audio. Permite activar sonido con clic local; no es parte del flujo normal del jugador.

## Verificación manual
- Inicio: prólogo sin música.
- A remoto: inicia gameplay y música si el navegador permite autoplay.
- Pausa/objeto: música detenida.
- Reanudar con A: música vuelve a sonar.
- Ataque, daño y proximidad: efectos existentes sin cambios.
