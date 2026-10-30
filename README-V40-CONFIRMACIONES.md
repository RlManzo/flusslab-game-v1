# THE OLD EVIL V40 — Confirmación de personajes y objetos

Base: V39 (escaneo predeterminado, selección manual opcional).

## Personajes
- Al confirmar un retrato por cámara o un héroe por selección manual, el televisor conserva la pantalla de selección y muestra un aviso arcade con el nombre del héroe.
- La historia aparece automáticamente **5 segundos después de la confirmación**.
- Se bloquean otras entradas de selección durante ese tiempo.
- Reiniciar cancela el temporizador y limpia el aviso.
- Idiomas: inglés, español y alemán.

## Objetos
- Al confirmar un escudo ya conseguido, el servidor equipa el escudo en W, muestra «¡EQUIPASTE EL ESCUDO!» en el televisor y reproduce el sonido de recogida de moneda existente.
- Al confirmar una motosierra ya conseguida, el jugador elige D o R2 y después se confirma el equipamiento con aviso y sonido.
- La llave y la cerveza no se equipan: cuando se confirman, el televisor muestra «¡LLAVE DISPONIBLE!» / «¡CERVEZA DISPONIBLE!» y el botón de uso, con el mismo sonido.
- Los objetos bloqueados no producen confirmación ni sonido.
- Las confirmaciones se muestran sobre el juego incluso mientras el inventario SELECT lo mantiene en pausa.
- No se cambian los umbrales del escáner, las referencias de la pintura, las vidas, los sprites ni los controles.

## Verificación
- Se verificó sintaxis JS en index.html, controller.html y server.js, y estructura del ZIP.
- Pendiente prueba extremo a extremo en Render, Raspberry Pi y celular.
