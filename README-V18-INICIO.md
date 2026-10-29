# Coswig V18 — Pantalla de inicio con tutorial interactivo

La pantalla de vinculación se convirtió en un inicio a pantalla completa con título COSWIG / LOS DOCE APÓSTOLES, cuatro escenas animadas y QR real. Las escenas avanzan automáticamente cada 4,7 segundos. Los botones 1–4 permiten elegir una escena y pausan el avance automático; ▶ lo reanuda. El QR, la conexión WebSocket y START mantienen el comportamiento de V17. No se alteraron sprites, combate, menú de pausa, restart ni salida del operador.

## Red recomendada
Se muestra el SSID si configurás la variable de entorno `COSWIG_WIFI_SSID` antes de iniciar `npm start`, por ejemplo `COSWIG_WIFI_SSID="MiRed" npm start` en Linux; o usás `?wifi=MiRed` en la URL del juego. Sin esa configuración se indica que utilicen la red recomendada de la instalación, sin inventar un nombre. La red indicada debe permitir que el teléfono alcance la URL real que contiene el QR. No se muestra ni se solicita una contraseña en pantalla.

## Tutorial
1. Conectarse a internet / Wi-Fi recomendada.
2. Escanear el QR real.
3. El teléfono se convierte en control; START inicia.
4. Escanear imágenes de la pintura para adquirir objetos y usar SELECT para elegirlos.

No se añadió vídeo ni dependencias; el tutorial emplea CSS y assets del proyecto. La X oculta de operador sigue funcionando sobre la pantalla de inicio.
