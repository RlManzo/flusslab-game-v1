# THE OLD EVIL — V26: respuesta inmediata del audio

- Se mantienen las grabaciones originales del usuario y la música Arcade Battle Theme.
- Se eliminó ~0.8–0.95 s de silencio inicial en los tres MP3 de voz, que causaba la percepción de audio tardío.
- Se normalizó la intensidad de las voces y se subió el volumen de los efectos; la música queda en 22 % para mantener el contraste.
- Cada pulsación de ataque A, S, D (y R2 cuando tiene ataque) dispara la voz inmediatamente desde `action()`, incluso si el héroe está terminando una animación.
- Los enemigos dicen «Hallo» al acercarse y cada 5 segundos mientras sigan aproximándose, en lugar de cada 10.
- El audio sigue empezando al pulsar A al terminar el prólogo.
- Chromium de la Raspberry Pi debe conservar `--autoplay-policy=no-user-gesture-required` en el acceso directo.
- Verificar en Render que se haya desplegado V26 y no una versión anterior; hacer recarga completa para evitar MP3 en caché.
