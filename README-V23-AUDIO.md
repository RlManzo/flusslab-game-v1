# THE OLD EVIL V23 — AUDIO

Base: V22. Música original elegida: Arcade Battle Theme (loop).
Grabaciones aportadas por el autor: Hallo, Unge héroe, Grito héroe.

- Ataques del héroe (puño, patada, espada, motosierra): hero_attack.mp3.
- Daño real recibido por el héroe: hero_hurt.mp3.
- Enemigos acercándose: enemy_hallo.mp3, con intervalo global aleatorio de 10–15,5 segundos y radio de proximidad.
- Música: arcade_battle_theme.mp3 en bucle durante el gameplay; se pausa en prólogo, pausa, modales y fin de partida.
- Botón ENABLE SOUND si el navegador bloquea la reproducción automática (frecuente cuando START se envía por WebSocket desde otro dispositivo).

No se modificaron sprites, animaciones, idiomas ni controles.
Para ejecutar: npm install y npm start. Probar audio en el navegador real de la Raspberry Pi; el inicio remoto puede requerir un clic en ENABLE SOUND por las políticas de autoplay del navegador.
