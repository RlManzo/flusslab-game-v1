# THE OLD EVIL — V30: feedback rojo al golpear enemigos

Base: V29 aprobada.

- Al acertar un golpe, todos los enemigos (musculoso, hooligan, motosierra, heavy y jefe) adquieren un tinte rojo semitransparente durante ~260 ms.
- El efecto se desvanece gradualmente, sin hacer transparente el cuerpo ni el fondo del escenario.
- El tinte se aplica únicamente a los píxeles del sprite, conservando el canal alfa y la silueta.
- Los fotogramas rojos se almacenan en caché para evitar recalcular la máscara en cada cuadro.
- Se reemplaza el parpadeo de transparencia anterior por este indicador de daño.
- No se modifican vidas, golpes, animaciones, sonidos, objetos, ni controles.

Pruebas: sintaxis JS validada; en Chromium, se verificó que los cinco tipos
de enemigo reciben daño, activan el efecto y lo reducen con el tiempo. 
También se verificó con un PNG de la motosierra que el tinte conserva los
píxeles completamente transparentes y la opacidad de los píxeles sólidos.

Para Render: desplegar el contenido de esta carpeta, no el directorio padre.
