# THE OLD EVIL — V32: escudo sin superposición y villano motosierra más grande

Base: V31, manteniendo el reinicio automático de 15 segundos y las demás funciones.

## Escudo
- El estado de defensa `shield` ya incluye el escudo en `sprites/shield_01.png` ... `shield_04.png`.
- Se eliminó del render del personaje la segunda capa de `assets/items/shield.png` que se superponía al escudo animado.
- Se mantiene el icono de escudo en el HUD y su representación en objetos recogidos y modales.

## Villano con motosierra
- Escala visual del enemigo `chainsaw`: 0.58 -> 1.08 (aprox. 1.86x su tamaño previo).
- Los cuatro fotogramas `hurt` fueron normalizados a un lienzo de 256x300, conservando transparencia y posición de los pies (y=286), para evitar que se encoja al recibir daño.
- Alturas visibles en los fotogramas de daño: 210–220 px; caminata: 225–232 px, antes de aplicar la misma escala 1.08.
- La barra de salud se desplaza por encima de su nueva altura.
- No se alteran puntos de vida, daño, ataque, caída de motosierra ni otras mecánicas.

## Despliegue
El ZIP contiene los archivos directamente en la raíz, incluido `server.js`, `package.json` y `render.yaml`. Subir su contenido a la raíz del repositorio conectado a Render.

## Verificación
- Sintaxis de JavaScript (index.html, controller.html, server.js): OK.
- PNGs de los cuatro fotogramas de daño: tamaño y transparencia verificados.
- Comparación visual de escala generada en `the-old-evil-v32-comparacion-escala.png` (fuera del ZIP).
- La prueba de navegador en este entorno no pudo completarse por una restricción de acceso local; probar en Render/Raspberry Pi.
