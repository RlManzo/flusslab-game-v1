# COSWIG V15 — Animaciones del héroe

Construido sobre el ZIP V13 suministrado por el usuario.

- Hit: seis fotogramas aprobados, 10 FPS; vuelve a idle/caminar.
- Death: doce fotogramas aprobados, 11 FPS; conserva el último frame hasta reiniciar.
- Render de hit y death: cajas alpha por imagen, escala constante por estado (0.34 y 0.325) basada en la altura visible del héroe original; pies a la altura del sprite original.
- Los PNG son transparentes. La anchura de la caída no cambia la escala.
- Todo daño efectivo provoca la animación correspondiente; el hooligan también golpea por contacto.
- Controles e inventario de V13 conservados.

Pruebas estáticas realizadas: JavaScript con node --check y presencia de imágenes.
Prueba jugable en navegador: pendiente de validación visual local.
