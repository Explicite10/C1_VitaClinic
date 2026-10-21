---
version: 1
slug: "app-pages-index-vue"
primary_target: "app/pages/index.vue"
related_targets: []
---

# Landing GLP-1 (`/`)

Scope: una sola ruta `/`, modo **Persuade**. Visitante: adulto en CDMX con sobrepeso, llega desde un anuncio de Google en su teléfono comparando clínicas. Acción única: abrir WhatsApp 55 6535 6274 con «Quiero saber si soy candidato». Prueba disponible: seguimiento triple (médico, nutricional, psicológico), duración ajustada (3/5/7/12+ meses), precio desde $4,500 MXN, dos clínicas con horario, tres reseñas públicas de Google. Restricciones: no inventar testimonios con nombre ni cifras propias; la curva de peso es ilustrativa y se etiqueta.

## Direction contract

THESIS: La página es una sola curva de evolución de peso que baja desde el mes 0 hasta más de 12 meses, y cada sección es una anotación clínica clavada en un mes. Refusa el hero de foto-sonriente + fila de tarjetas de beneficios: el dato dramatizado sustituye a la foto de stock.

OWN-WORLD: Campo slate-teal profundo (#223B41 → #16292D) dueño de más del 40% de la superficie; lectura en campo claro (#EEF3F2) para las secciones densas. Trazo de curva blanco de 3px con retícula clínica hairline (líneas de mes). Un solo acento cálido (#D7B56A) reservado a hitos de promoción. Display Bricolage Grotesque 800 con tracking -0.03em; cuerpo Onest. Controles en píldora; el CTA de WhatsApp en verde WhatsApp con sombra con offset. Cifras tabulares. Sin tarjetas de icono+título+texto; sin kickers.

STORY: Entiende en 3 segundos que es un tratamiento médico GLP-1 con seguimiento completo; cree que la diferencia es el equipo (médico+nutrición+psicología) y la duración a su medida, por eso se regana menos; ve el precio y las promos sin preguntar; actúa tocando WhatsApp.

FIRST VIEWPORT: Nav fina con logo blanco a la izquierda y CTA píldora a la derecha. Hero en campo teal: izquierda (5/12) titular de dos líneas «Baja de peso con GLP-1 y un equipo que te acompaña», lead de una frase, CTA WhatsApp grande, debajo las dos promos como hitos dorados. Derecha (7/12) la curva se dibuja de izquierda a derecha con easing balístico desde «Mes 0 · primera consulta» hasta «Mes 12+», con hitos: 10% OFF en mes 0, 15% OFF en mes 3, y la meseta final «sin reganancia». En móvil el titular se reapila arriba y la curva ocupa todo el ancho debajo, CTA fijo inferior.

FORM: Gráfica de evolución clínica (curva de seguimiento de peso); candidato 4 de 7 en mi lista ordenada; seed key ffcfc63a. Interacción firma: la curva se sigue dibujando con el scroll, y cada sección «pincha» un punto de la curva con su etiqueta de mes. Raises: easing balístico (vúmetros), campo con vastas zonas sin imprimir (Factory), teal >40% (sol de interior), display que se reapila sin encoger (manifiesto).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- Vigencia de las promociones (sin fecha hasta que el usuario la dé).
- Fotos reales de clínica/equipo y testimonios con nombre: slots etiquetados «reemplazar».
