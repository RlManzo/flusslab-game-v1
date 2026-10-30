# THE OLD EVIL V34 — Gato Montés sin espada

Base: V33 (selección de dos héroes).

- El héroe original mantiene su espada y el botón D desde el comienzo.
- El Gato Montés comienza sin espada ni arma equipada.
- En el control del celular, D aparece atenuado e inhabilitado mientras el Gato Montés no tiene motosierra. El indicador de ataque muestra LOCKED / BLOQUEADO / GESPERRT.
- El juego ignora cualquier ataque D del Gato Montés antes de conseguir un arma, incluso si llega por teclado o WebSocket; tampoco reproduce el grito de ataque.
- Al recoger la motosierra, el Gato Montés la equipa automáticamente en D y el botón se habilita. SELECT sigue permitiendo elegir ranuras.
- El reinicio y una nueva elección de héroe restablecen correctamente el equipamiento de cada personaje.
- No se modificaron sprites, música, voces, enemigos ni los demás controles.

Pruebas: sintaxis JS validada. En Chromium (prueba aislada con HTML cargado en memoria) se comprobó: Gato Montés sin espada, D sin ataque, recogida de motosierra con equipamiento automático, D ejecutando motosierra, héroe original usando espada y estado deshabilitado/habilitado del botón D en el celular.
Pendiente: prueba de extremo a extremo con Render, Raspberry Pi y celular.
