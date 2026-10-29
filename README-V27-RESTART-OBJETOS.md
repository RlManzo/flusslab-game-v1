# THE OLD EVIL — V27 · Reinicio completo y sprites de objetos

## Comportamiento

1. Al morir el héroe, el mando cambia el botón START/PAUSE a **RESTART** (en el idioma elegido). Al pulsarlo se vuelve a la pantalla inicial.
2. RESTART desde el menú de pausa (televisor o celular) también regresa a la pantalla inicial: no reinicia directamente el nivel.
3. Se descarta el progreso, se reinicia el prólogo para la próxima partida, se restaura el inglés como idioma predeterminado y se pausa la música.
4. El servidor invalida el QR de la sesión anterior, desconecta el celular viejo y crea un QR nuevo. El jugador debe escanear el nuevo código y pulsar START, leer el prólogo y pulsar A.
5. Los sprites de los objetos siguen siendo PNG transparentes, con limpieza de fragmentos de fondo separados y residuos laterales en cerveza, llave, libro y emblema. No se cambió el diseño de los objetos.

## Probar en Render

- Desplegar la carpeta completa (index.html, controller.html, server.js, assets, package.json).
- Conectar celular y entrar al nivel. Abrir pausa → RESTART. Debe reaparecer el QR y el celular viejo debe desconectarse.
- Escanear nuevo QR, iniciar, avanzar hasta la derrota y comprobar que START/PAUSE pasa a RESTART.
- Probar en las tres traducciones.
- Revisar los objetos sobre el fondo del escenario y en los modales de hallazgo.

## Audio

La música Arcade Battle Theme y las tres grabaciones del usuario no se modificaron. Mantener la opción `--autoplay-policy=no-user-gesture-required` en Chromium de la Raspberry Pi.
