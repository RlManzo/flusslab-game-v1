# THE OLD EVIL V28 — Villano motosierra + cervezas

Base: THE OLD EVIL V27 (archivo ZIP proporcionado por el usuario).
Sprites: 20 fotogramas de la demo del villano V3 aprobada (6 caminata, 4 ataque, 4 daño, 6 muerte).

## Nuevo enemigo
- Aparece en la parte 3, en la posición que ya estaba reservada para el enemigo tipo `chainsaw`.
- Skinhead alto, cresta roja y chaleco con tachas; camina de derecha a izquierda con motosierra.
- A corta distancia ejecuta una animación de motosierra de arriba hacia abajo.
- El daño (2 corazones) se aplica durante el barrido, con comprobación de distancia, invulnerabilidad y escudo.
- Tiene 10 puntos de vida (frente a 3 de un enemigo normal).
- Al recibir daño muestra los fotogramas opacos aprobados de la demo V3.
- Al morir muestra 6 fotogramas de caída y, al cabo de ~0,66 s, deja caer la motosierra.
- Los fotogramas mantienen el tamaño y la alineación de los pies. Se conservan transparentes solo los fondos.

## Hooligans y cervezas
- TODOS los hooligans que lanzan cuchillos dejan caer una cerveza cuando mueren.
- Si un hooligan tenía asignado un objeto especial (escudo, etc.), deja ambos objetos.
- El héroe puede recoger cada cerveza por proximidad; el contador se acumula y el modal informa cómo usarla.
- No se modificaron los sonidos, el prólogo, el reinicio, el controlador ni los idiomas.

## Despliegue
Subir el contenido de esta carpeta al repositorio de Render conservando su estructura.
No se requieren nuevas dependencias ni cambios en Chromium de Raspberry Pi.

## Validación
Se comprobó sintaxis JavaScript, integridad de sprites PNG y pruebas automatizadas de
lógica en Chromium (aparición, 13 hooligans con cerveza, escudo + cerveza,
ataque con daño y caída de la motosierra). La prueba visual completa en Raspberry Pi
con controlador físico sigue pendiente.
