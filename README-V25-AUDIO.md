# THE OLD EVIL V25 — AUDIO / CONTROLES

## Cambios

1. **START** abre el prólogo sin música. **A** desde el celular cierra el prólogo y pide reproducir inmediatamente la música aprobada, en loop. No hace falta hacer clic en el juego **si Chromium se inició permitiendo autoplay**.
2. El grito grabado del héroe suena **con cada pulsación** de ataque A (puño), S (patada), D (ataque equipado) y el ataque especial R2 cuando corresponde. Se usan cinco voces independientes para evitar que un ataque interrumpa o silencie el anterior. Los botones no modifican su mecánica.
3. Los enemigos que se acercan desde la derecha dicen el **Hallo** grabado en el primer acercamiento y después cada **10 segundos** de tiempo activo mientras siga habiendo enemigos acercándose. El temporizador se reinicia cuando ya no hay enemigos próximos.
4. El sonido de daño sigue siendo la grabación original. La música se detiene durante pausa y hallazgos de objetos.

## Raspberry Pi — imprescindible

La pulsación A se recibe por **WebSocket** desde el celular. Chrome/Chromium normal **no la considera una interacción local** para autorizar sonido. Ningún código de la página puede saltarse esa restricción.

En la instalación dedicada, **cerrá todas las instancias previas de Chromium** y lanzá la ventana del juego con:

```bash
chromium --kiosk --autoplay-policy=no-user-gesture-required http://localhost:3000
```

En algunas Raspberry el comando se llama `chromium-browser`. Podés ejecutar `./launch-raspberry-audio.sh`, que detecta ambos nombres. Si el servidor está en otro puerto, usá `THE_OLD_EVIL_URL=http://localhost:PUERTO ./launch-raspberry-audio.sh`.

Si ya tenés un script de inicio automático de Chromium, **agregá `--autoplay-policy=no-user-gesture-required` a ese script** en vez de abrir una segunda instancia.

Para pruebas con Chrome normal en PC, el navegador puede bloquear el sonido. En ese caso se muestra un botón de emergencia solo para el operador. No es necesario ni aparece en la instalación correctamente configurada.

## Comprobación

- Abrir el juego en Chromium configurado. START -> prólogo (silencio) -> A -> comienza la música sin mouse.
- Presionar A/S/D repetidas veces: se escucha un grito en cada pulsación, aunque el héroe siga animando el ataque anterior.
- Al acercarse enemigos por la derecha, se escucha Hallo al entrar en rango, luego aproximadamente cada 10 segundos mientras persista el acercamiento.
- Recibir daño: sonido Ung. Pausar: música se detiene. Reanudar: vuelve.
