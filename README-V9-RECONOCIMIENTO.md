# COSWIG V9 — ajuste de reconocimiento visual

Sobre la V8 de Render. Corrección de la diferencia entre coincidencias: ahora se compara el mejor resultado de cada **objeto diferente**. Se amplían las escalas y desplazamientos evaluados.

## Prueba

1. Subir esta versión al repositorio enlazado a Render y esperar el despliegue.
2. Abrir juego en PC, conectar celular con QR, recoger el escudo en el nivel y pulsar SELECT.
3. Apuntar la cámara a **una sola casilla**, la del escudo, con buena luz.
4. Al detectar similitud >= 0,32, margen >= 0,025 y cuatro lecturas consistentes, aparecerá «¿Es ESCUDO?». Tocar **CONFIRMAR OBJETO** para equiparlo.
5. Si escaneás uno no obtenido, indicará «BLOQUEADO» y no permitirá equiparlo.

## Limitaciones

Este detector todavía utiliza correlación de colores y composición, NO reconocimiento semántico ni homografía. Un puntaje de 0,37 no demuestra por sí solo la identidad de la imagen. Por eso las coincidencias moderadas requieren confirmación antes de equipar. Si hay falsos positivos, ajustar el umbral o reemplazar el detector con características locales (p. ej. ORB/OpenCV.js) tras obtener muestras de cámara.

En el panel SELECT, «Diagnóstico de cámara» muestra similitud y el competidor. El inventario sigue siendo validado por el juego.
