# Coswig V13 — Hooligan integrado

Basada en V12 objetos gráficos.

- Cada 3 enemigos normales: **skinhead, skinhead, hooligan** (contador reinicia al reiniciar la partida). Jefes y enemigos especiales conservan su tipo.
- Hooligan rubio de campera negra sin simbología nazi, animaciones transparentes propias en `sprites/hooligan/`.
- El hooligan avanza de derecha a izquierda y lanza cuchillos hacia la izquierda.
- Animaciones del hooligan: caminata 12 FPS, ataque 12 FPS, daño 9 FPS.
- Las piedras desaparecen de la generación de enemigos, lógica de colisiones, renderizado y textos.
- El skinhead conserva su spritesheet y su combate cuerpo a cuerpo.

Ejecución: `npm install`, `npm start`; abrir el juego en el navegador como en V12.
