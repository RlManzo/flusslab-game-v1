# THE OLD EVIL — V33 · Selección de personaje

Base exacta: ZIP V32 adjuntado por el usuario.

## Flujo
QR -> celular conectado -> START -> pantalla PLAYER SELECT -> izquierda/derecha -> A confirma -> prólogo -> A -> gameplay.
La selección aparece de nuevo al reiniciar una partida y requiere un QR nuevo, como V32.

## Personajes
- ORIGINAL HERO: sprites y comportamiento originales, sin cambios.
- WILDCAT / GATO MONTÉS: 46 fotogramas de la demo V6 aprobada, con caminata de 7 poses, muerte, motosierra, defensa, cerveza, esquiva, golpes, etc.
- Mismos HP, daños, inventario, colisiones, controles y sonidos. Se cambia solo el aspecto visual.
- Los PNG del gato se anclan por los límites alfa reales, evitando cambios de tamaño y salto de pies.
- **Limitación de material**: la demo V6 no contenía sprites exclusivos de espada; temporalmente se muestra la pose de puñetazo para el ataque básico con espada del Gato Montés. La lógica del ataque sigue siendo la de espada.
- La llave sigue usándose con la lógica existente (no hay animación específica de llave en el motor V32).

## Render
`server.js`, `package.json` y `render.yaml` están en la raíz del ZIP. Copiar el contenido a la raíz del repositorio, sin una carpeta contenedora adicional.

## Pruebas pendientes
Validar la selección real desde el joystick de un celular, escalas en Raspberry Pi, y animación de espada específica para el gato antes de considerarla definitiva.
