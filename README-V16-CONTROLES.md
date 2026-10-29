# COSWIG V16 — Recuperación de controles tras recibir daño

Base: V15 del proyecto, sin cambiar sprites aprobados ni distribución del mando.

## Correcciones

- El estado `hit` ya no inmoviliza completamente el movimiento horizontal. El stick mueve al héroe a 140 unidades/s mientras dura la reacción (velocidad de marcha habitual: 220).
- Al terminar los seis fotogramas (10 FPS), recupera automáticamente `idle` o `walk` según el stick.
- Seguridad adicional: el estado de golpe no puede prolongarse más de 0,85 s aunque el navegador pierda fotogramas.
- El tiempo de protección después de recibir daño aumenta de 0,85 a 1,10 s para reducir cadenas de golpes que parecían congelar el mando.
- La animación `death` sigue siendo terminal hasta reiniciar, sin posibilidad de caminar.
- Sprites y proporciones V15 no modificados.

## Pruebas

- Sintaxis JavaScript: `node --check` (correcta).
- Prueba en Chromium aislada con el HTML: la función `damageHero` lleva a `hit`, el stick mueve al personaje durante `hit`, termina en `walk`, el daño mortal termina en el último fotograma de `death` y bloquea desplazamiento.
- Validación completa con WebSocket y teléfono físico: pendiente. Si se sigue cortando el mando sin que aparezca el estado de golpe, verificar pérdidas de conexión y eventos del mando.
