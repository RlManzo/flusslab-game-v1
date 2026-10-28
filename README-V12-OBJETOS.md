# COSWIG V12 — Objetos gráficos y avisos de descubrimiento

Base: V11 optimizada para Raspberry Pi y Render.

- Los 9 sprites separados del recorte aprobado por el usuario están en `assets/items/` (PNG RGBA).
- Los objetos que dejan caer enemigos aparecen como imágenes, sin etiquetas.
- Cuando el personaje recoge una recompensa se muestra en el centro `¡ENCONTRASTE!` + imagen + nombre durante ~3.2 segundos. No se anuncia el objeto hasta recogerlo.
- Si se recogen varias recompensas seguidas, los avisos se encolan.
- Se ocultan los mensajes inferiores y los textos de combate, oleadas y consejos.
- Los iconos de llave, cerveza, escudo, motosierra y R2 se dibujan desde los mismos sprites.
- Al bloquear con W tras equipar escudo, se superpone el escudo gráfico frente al héroe. Se conservan los fotogramas originales del héroe y el funcionamiento de SELECT.
- La imagen aportada tenía el patrón de transparencia integrado visualmente; se extrajo el fondo de manera automática. Comprobar bordes a escala real antes de su uso final en una exposición.

Despliegue: misma configuración `render.yaml` de V11.
