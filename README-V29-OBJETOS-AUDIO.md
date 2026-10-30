# THE OLD EVIL V29 — Hallazgos sin repeticiones y sonido arcade

Base: THE OLD EVIL V28 (villano motosierra y cervezas de hooligans).

- El modal de instrucciones de un objeto aparece solo en la primera recogida de **ese tipo** durante una partida.
- Las recogidas posteriores del mismo tipo no interrumpen el gameplay; cerveza sigue aumentando el contador.
- Cada nuevo tipo (llave, escudo, motosierra, cerveza, etc.) tiene su propia primera explicación, con A para continuar.
- RESTART limpia el registro de objetos ya explicados, porque comienza una nueva partida.
- Cada recogida reproduce `assets/audio/item_pickup.wav`, un efecto **original** breve de tres notas chiptune ascendentes; no es el sonido original de Mario.
- El sonido se lanza antes de abrir el modal para evitar que el bloqueo temporal de gameplay impida reproducirlo.
- Pool de cuatro instancias para recoger varios objetos seguidos sin cortar sonidos.
- Sin cambios a las voces, música, sprites, enemigos, idioma o control.

## Validación
- JavaScript verificado con `node --check`.
- Pruebas de lógica en Chromium: primera cerveza abre modal y suena; segunda cerveza incrementa contador y suena sin modal; primer escudo abre su propio modal; reset permite mostrar de nuevo la explicación.
- Prueba visual/audio real en la Raspberry Pi + Render pendiente.
