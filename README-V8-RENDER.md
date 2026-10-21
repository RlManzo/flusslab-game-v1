# COSWIG V8 — Deploy en Render

## Publicar desde GitHub

1. Descomprimí este ZIP y subí **el contenido de la carpeta** a un repositorio de GitHub (sin `node_modules`).
2. En https://dashboard.render.com elegí **New > Blueprint** y seleccioná el repositorio; Render detecta `render.yaml`. Alternativa: **New > Web Service** con Runtime Node, Build Command `npm install`, Start Command `npm start`, Health Check Path `/health`.
3. Esperá el estado **Live** y abrí la URL HTTPS que Render asignó a tu servicio en la computadora.
4. La computadora muestra el QR. Escanealo con el celular y abrí el mando en el navegador. Debe cargar en `https://...onrender.com/controller?code=...`.
5. Presioná START para jugar. En SELECT, el juego se pausa y se abre la cámara (aceptá los permisos). Apuntá a una casilla de la pintura. Solo se equipan objetos ya conseguidos.

## Detalles técnicos

- Render se encarga del certificado TLS. El navegador usa HTTPS/WSS y el servidor Node corre por HTTP detrás del proxy: **no hay que configurar `TLS_KEY` ni `TLS_CERT` en Render**.
- La URL del QR usa la URL pública de Render (a través de `RENDER_EXTERNAL_URL`); opcionalmente configurá `PUBLIC_URL` si usás un dominio propio, por ejemplo `https://juego.midominio.com`.
- El servidor escucha en `0.0.0.0` y respeta `PORT`. `/health` responde JSON para la verificación de Render.
- Host y celular deben abrir el **mismo servicio**. Las partidas son temporales y se guardan en memoria: si Render reinicia o duerme el servicio, se interrumpe la sesión y se pierde el progreso en memoria.
- Usar **una sola instancia**: las sesiones WebSocket residen en la memoria del proceso (no hay Redis ni persistencia).
- En el plan gratuito pueden producirse pausas por inactividad y demoras en el primer acceso; para exhibiciones prolongadas considerar un plan de instancia siempre activa.
- La cámara reconoce por aproximación visual las nueve casillas. Sigue siendo **experimental** y requiere calibración sobre la pintura en condiciones reales de luz y distancia.
- No se envía video de la cámara al servidor; el reconocimiento corre en el celular.
- Tanto la PC como el celular necesitan Internet.

## Probar localmente

```bash
npm install
npm start
```

Abrí `http://localhost:3000` en la computadora. En red local el control funciona, pero la cámara requiere HTTPS desde el celular (esa es una de las razones para usar Render).

## Solución de problemas

- QR con IP local: abrí el juego desde la URL pública HTTPS de Render, no desde localhost.
- Cámara no abre: revisá permiso de cámara del navegador y que el mando esté en HTTPS.
- Error de sesión: cerrá y reabrí la pestaña del juego en PC para generar nuevo QR.
- Desconexión: comprobá que ambos dispositivos tienen Internet y que Render no reinició el servicio.
