# COSWIG V10 — Modo exposición, televisor vertical

- La pantalla principal muestra únicamente el canvas del juego, a escala máxima sin recortes.
- La resolución lógica original es de 540 x 960 (9:16). En un televisor vertical 1080 x 1920 ocupa toda la pantalla. En otras proporciones deja márgenes negros para evitar cortar escenario, vida u objetos.
- El HUD (corazones, llave, cerveza y equipamiento D/W/R2) permanece integrado en el canvas.
- Se ocultan los botones de depuración, el inventario HTML y los textos externos, pero se conservan sus nodos en el DOM porque el código del juego los usa internamente.
- La pantalla de vinculación por QR sigue visible antes de START. SELECT, inventario y escaneo se manejan desde el celular.
- Para pantalla completa sin barra del navegador en Raspberry Pi, ejecutar Chromium en modo kiosk, por ejemplo: `chromium --kiosk --no-first-run https://TU-SERVICIO.onrender.com`
- Despliegue: igual que V9, con `render.yaml`.

Esta versión cambia la presentación en el televisor, no el algoritmo experimental de reconocimiento de la cámara.
