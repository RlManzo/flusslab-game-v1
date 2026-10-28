# COSWIG V11 — optimización de rendimiento para Raspberry Pi

- Se reemplaza el dibujo de la panorámica gigante (8640×960) por 16 segmentos de 540×960. Solo se dibujan hasta dos por fotograma.
- Se limita la renderización a 30 FPS, reduciendo el trabajo de Chromium en la Raspberry Pi. Para comparar con 60 FPS, agregar `?fps=60` a la URL del juego.
- Se omite el dibujo constante durante START inicial y pausa SELECT.
- No se cambia la resolución interna de 540×960 ni la disposición a pantalla completa de la V10.
- Se mantienen intactos los controles, las recompensas, el inventario y el reconocimiento de cámara.

## Publicar
Subir todos los archivos del ZIP a GitHub, incluidos `assets/panorama_tiles/`. Render desplegará como antes.

## Prueba
En la Raspberry Pi, cerrar y reabrir Chromium en modo kiosco o recargar ignorando caché. Probar una escena con muchos enemigos y observar si desaparecen los tirones. Si el movimiento se percibe demasiado entrecortado a 30 FPS, probar `?fps=60` en la URL: si la Pi puede sostenerlo, se verá más suave.

La mejora se basa en análisis de código; falta validarla midiendo FPS reales en el dispositivo.
