# THE OLD EVIL V35 — Optimización de carga y rendimiento

Base: V34, conservando los dos héroes, el Gato Montés sin espada inicial, sonidos, escenas, controles y reinicio automático.

## Cambios
- **Inicio**: prioridad al logo (15 KB), sin esperar los sprites del gameplay. El QR se genera al conectar el WebSocket con Render y ahora muestra un indicador mientras llega.
- **Carga de sprites**: un administrador de recursos limita a 4 las descargas simultáneas y prioriza recursos visibles. Los sprites de Gato Montés y el villano motosierra no se descargan masivamente durante el inicio. El héroe elegido se prepara al seleccionarlo.
- **Escenario**: se solicitan inicialmente solo los 4 primeros segmentos de panorama; se preparan los siguientes a medida que avanza la cámara. Los primeros fotogramas y segmentos críticos se esperan al pulsar A para comenzar el gameplay, mostrando `LOADING GAME…` en el prólogo si hace falta, con un límite de espera de 9 segundos. El sonido se habilita **en la misma pulsación A**, antes de esperar los recursos.
- **Caché HTTP**: imágenes y otros recursos estáticos tienen caché de 10 minutos con ETag y Last-Modified; HTML se revalida. Evita descargar nuevamente sprites inalterados tras recargar el navegador.
- **Sin pérdida visual**: se conservaron todos los PNG/JPG originales, los 30 FPS y la resolución de 540×960.

## Comprobaciones
- Prueba con Chromium headless y recursos interceptados: en la carga inicial la V34 solicitó **230 archivos** (185 sprites y 16 segmentos del panorama); la V35 solicitó **50 archivos** (26 sprites y 4 segmentos), con una espera de 2 segundos en ambas pruebas. Es una medida de solicitudes, **no** una medición de FPS o tiempos de carga en Raspberry Pi.
- Prueba de flujo simulada: selección de Gato Montés, carga de sus sprites, A en prólogo, entrada al gameplay y dibujo del primer escenario sin errores JavaScript.
- Verificación sintáctica de JavaScript (index.html, controller.html, server.js) y estructura ZIP.

## Límite externo
Render está configurado en plan `free` en `render.yaml`. Un inicio en frío del servidor puede retrasar el QR y la conexión WebSocket; esa espera no se elimina optimizando sprites. Para evitarla de forma confiable se necesita mantener el servicio activo en un plan sin suspensión, o servir el juego y WebSocket desde un equipo local siempre encendido (por ejemplo la Raspberry Pi).

## Despliegue
Extraer el ZIP directamente en la raíz del repositorio GitHub (server.js y package.json deben estar en la raíz). Subir los cambios a Render. Forzar recarga de Chromium después del despliegue para evitar recursos antiguos en caché. Probar la carga del QR, el inicio del gameplay, la caminata y los cambios de escenario con el celular real.
