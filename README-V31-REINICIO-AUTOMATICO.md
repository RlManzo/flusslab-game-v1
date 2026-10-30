# THE OLD EVIL — V31: reinicio automático tras la muerte

Base: V30 (efecto rojo y proyecto preparado para Render).

## Comportamiento

1. Al llegar la salud del héroe a cero, se reproduce su animación de muerte y se inicia una cuenta regresiva de **15 segundos desde el golpe mortal**.
2. El televisor muestra GAME OVER y el tiempo restante, mientras el mando del celular deja de aceptar acciones y reemplaza el joystick por una pantalla de fin de partida con la cuenta regresiva.
3. Cumplidos los 15 segundos, el juego regresa automáticamente a la pantalla de inicio, borra el progreso, restaura el idioma inicial y solicita al servidor invalidar la sesión anterior.
4. El servidor desconecta al mando viejo, invalida el QR anterior y emite un nuevo código QR para el siguiente jugador.
5. El celular anterior muestra una pantalla de sesión terminada y explica cómo abrir la cámara para escanear el **nuevo QR**, sin conservar el joystick ni permitir volver a usar la sesión vieja.
6. La misma persona puede escanear el nuevo QR y volver a jugar, o puede hacerlo otra persona.

Se mantiene la opción de RESTART desde el menú de pausa; ese reinicio también invalida la sesión.

## Render

El ZIP está organizado **sin carpeta contenedora**: `server.js`, `package.json`, `render.yaml`, `index.html`, `controller.html`, `assets/` y `sprites/` están en la raíz del archivo. Extraer/copiar el contenido directamente en la raíz del repositorio GitHub y desplegar en Render.

## Validación

- Sintaxis JavaScript de servidor, juego y control.
- Prueba simulada en Chromium: muerte => cuenta regresiva de 15 segundos => reinicio => solicitud `reset_session`.
- Prueba simulada en Chromium del celular: GAME OVER oculta el control; `session_reset` desconecta y muestra la instrucción de escanear un QR nuevo; cierre del WebSocket no restablece el joystick.
- Integridad del ZIP.

Pendiente: prueba end-to-end en Render con celular real y Raspberry Pi.
