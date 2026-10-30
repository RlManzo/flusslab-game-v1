# THE OLD EVIL V36 — selección de héroes con cámara

Base V35. Después de START, el televisor muestra los dos héroes. El celular ofrece SCAN PAINTING y conserva selección manual con joystick + A.

Retratos: héroe original = imagen inferior izquierda de la pintura; Gato Montés = imagen superior derecha. Las otras dos casillas no seleccionan héroes.

El usuario abre la cámara (permiso HTTPS), encuadra un solo retrato y confirma. La elección se comunica por WebSocket al anfitrión; el televisor muestra el prólogo. No se altera el reconocimiento de objetos ni los controles.

Los dos archivos references/hero_*.jpg provienen de la fotografía aportada. Conviene probar y ajustar umbrales en la instalación real con luz y reflejos reales; una comparación de imágenes no garantiza identificación infalible. El botón MANUAL SELECTION permite volver al joystick.
