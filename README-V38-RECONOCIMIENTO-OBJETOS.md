# THE OLD EVIL V38 — reconocimiento de objetos de la pintura actualizada

Base: V37 con selección de héroes por cámara corregida.

Objetos activos en el gameplay y en el reconocimiento:
- Llave: casilla superior izquierda.
- Cerveza: casilla central izquierda.
- Escudo heráldico: casilla central derecha.
- Motosierra: casilla inferior central.

No se habilitan ni se reconocen como objetos jugables el libro, el farol, el erizo, el escudo azul ni el objeto rojo. No se agregan recompensas ni habilidades.

Se reemplazan las referencias fotográficas con dos recortes por objeto extraídos de la fotografía actualizada: recorte con marco y recorte cercano. La detección exige 4 lecturas consistentes, puntuación >= 0.43, margen >= 0.055 y confirmación manual, y no equipa objetos que el héroe aún no haya recogido.

La selección de personajes, gameplay, sprites, música, reinicio y despliegue se conservan.

Pruebas: sintaxis JS y ZIP validados. La calibración final del reconocimiento requiere prueba con cámara real delante de la pintura y distintas iluminaciones; los umbrales pueden necesitar ajustes.
