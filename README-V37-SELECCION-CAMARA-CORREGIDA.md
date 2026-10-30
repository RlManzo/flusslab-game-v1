# THE OLD EVIL V37 — selección de héroe por cámara corregida

Base: V36.

**Error solucionado:** `controller.html` enviaba `input.kind = "hero_match"` al confirmar un retrato, pero `server.js` descartaba ese mensaje por no estar incluido en sus tipos permitidos. El televisor conservaba `selectionIndex = 0`, por lo que siempre iniciaba el héroe original.

**Corrección:** el servidor reenvía exclusivamente `hero_match` con `action = "original"` o `"cat"` desde el controlador emparejado. El juego ya sabe seleccionar el héroe correcto y pasar al prólogo. No cambia la selección manual ni el reconocimiento visual.

**Pruebas:** sintaxis del servidor, `index.html` y `controller.html` verificada. Test de encaminamiento WebSocket simulado: ambos retratos se reenvían y las selecciones inválidas se rechazan.

**Pendiente:** prueba de extremo a extremo en Render con la cámara del celular y la Raspberry Pi.
