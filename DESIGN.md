---
name: VitaClinic · Landing GLP-1
description: Campo slate-teal profundo, una curva clínica blanca que se dibuja mes a mes y un solo acento dorado para los hitos.
colors:
  brand-teal: "#5b7b84"
  brand-teal-deep: "#4e6668"
  brand-ink: "#2f3030"
  field-900: "#16292d"
  field-800: "#1d363b"
  field-700: "#223b41"
  field-600: "#2c4a51"
  field-500: "#3a5e66"
  field-400: "#5b7b84"
  field-300: "#87a3aa"
  field-200: "#b9cbcf"
  field-100: "#dbe5e7"
  field-050: "#eef3f2"
  ink-900: "#1c2426"
  ink-700: "#2f3030"
  ink-500: "#4e6668"
  ink-300: "#6f8a90"
  mark-500: "#d7b56a"
  mark-600: "#b9933f"
  mark-050: "#fbf5e6"
  wa: "#25d366"
  wa-deep: "#128c5e"
  wa-ink: "#06281a"
  paper: "#fff"
  line: "color-mix(in oklab, #5b7b84 28%, transparent)"
  line-strong: "color-mix(in oklab, #5b7b84 55%, transparent)"
  line-on-field: "color-mix(in oklab, #eef3f2 18%, transparent)"
  line-strong-on-field: "color-mix(in oklab, #eef3f2 36%, transparent)"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Onest', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.2rem + 4vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'opsz' 96, 'wdth' 100"
  numeral:
    fontFamily: "'Bricolage Grotesque', 'Onest', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.4rem + 5vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "tabular-nums lining-nums"
  headline:
    fontFamily: "'Bricolage Grotesque', 'Onest', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 2.6vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'opsz' 96, 'wdth' 100"
  title:
    fontFamily: "'Bricolage Grotesque', 'Onest', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.8vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.55
    fontFeature: "tabular-nums lining-nums"
  micro:
    fontFamily: "'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "7rem"
  section-y: "clamp(4rem, 3rem + 5vw, 8rem)"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
components:
  button-wa:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.wa-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.35em 0.85em 1.15em"
  button-wa-lg:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.wa-ink}"
    rounded: "{rounded.pill}"
    padding: "1em 1.5em 1em 1.25em"
  button-ghost:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
    padding: "0.85em 1.35em 0.85em 1.15em"
  chip-field:
    backgroundColor: "{colors.field-700}"
    textColor: "{colors.field-050}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.8em"
  chip-mark:
    backgroundColor: "{colors.mark-500}"
    textColor: "{colors.field-900}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.7em"
  chip-outline:
    backgroundColor: "transparent"
    textColor: "{colors.field-050}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.8em"
  card-plan:
    backgroundColor: "{colors.field-050}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
  card-plan-active:
    backgroundColor: "{colors.field-700}"
    textColor: "{colors.field-050}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
  card-promo:
    backgroundColor: "{colors.mark-500}"
    textColor: "{colors.field-900}"
    rounded: "{rounded.lg}"
    padding: "{spacing.6}"
  card-clinic:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.lg}"
    padding: "{spacing.5}"
  milestone-card:
    backgroundColor: "{colors.field-050}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.7rem"
  milestone-card-mark:
    backgroundColor: "{colors.mark-500}"
    textColor: "{colors.field-900}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.7rem"
  nav:
    backgroundColor: "{colors.field-800}"
    textColor: "{colors.field-050}"
    height: "72px"
---

# Design System: VitaClinic · Landing GLP-1

## Overview

**Creative North Star: "La gráfica de evolución clínica"**

La página es una sola curva de peso que baja del mes 0 al mes 12+, y cada sección es una anotación clavada en un mes de esa curva. El mundo se construye sobre un campo slate-teal profundo (derivado del teal de los logotipos y llevado a más oscuridad) que ocupa más del 40 % de la superficie; las secciones densas (beneficios, paquetes, pasos, clínicas, FAQ) se leen sobre campo claro o papel blanco. Sobre el campo oscuro, un trazo blanco de 3.5 px se dibuja con easing balístico y arrastra consigo la retícula de meses, el área bajo la curva y los hitos; sobre el campo claro, la curva reaparece en miniatura como `MonthPin` junto a cada título.

El tono es clínico sin frialdad: ninguna foto de stock ni fila de tarjetas icono+título+texto; el dato dramatizado (porcentajes, meses, precio) sustituye a la imagen. Hay un solo acento cálido, el dorado del hito, que marca las promociones y la curva de reganancia; el verde de WhatsApp es la única otra voz y pertenece exclusivamente al CTA. Los iconos son un trazo propio de 1.75 con remates redondos, el mismo lenguaje que la línea de ECG del isotipo.

Rechazos confirmados por el contrato y verificados en la construcción: sin hero de foto sonriente, sin tarjetas icono+título+texto, sin kickers tipográficos sobre los títulos (la anotación de mes vive al lado del título, nunca encima), sin grises neutros sobre el campo (la tinta muted se deriva siempre del campo teal).

**Key Characteristics:**
- Campo slate-teal (#223b41 → #16292d) como superficie dominante; lectura en #eef3f2 y papel blanco.
- Una curva blanca de 3.5 px con retícula hairline; la misma curva en miniatura (`MonthPin`) hila todas las secciones.
- Un acento dorado (#d7b56a) con una función: el hito (promoción o reganancia).
- Verde WhatsApp solo en el CTA; píldora con sombra con offset y brillo que recorre al hover.
- Bricolage Grotesque 800 con tracking −0.03em para el titular; Onest para el cuerpo; cifras tabulares siempre.
- Movimiento balístico (quint-out), revelado con blur, y respeto estricto a `prefers-reduced-motion`.

## Colors

Paleta monocroma de slate-teal muestreada de los logotipos, estirada hacia la oscuridad para el campo y hacia la luz para la lectura; dos voces externas, el dorado del hito y el verde de WhatsApp, cada una con una sola función.

### Primary
- **Campo teal** (`field-700` #223b41): superficie base de todas las secciones `.on-field` (hero, seguimiento, cierre, cabecera de tarjeta de clínica) y `theme-color` del navegador. También el fondo del paquete activo y del número de paso.
- **Campo nocturno** (`field-800` #1d363b, `field-900` #16292d): la barra de navegación (`field-800`) y las secciones más profundas (promociones y pie en `field-900`). Los gradientes del hero y del cierre viajan entre `field-800` y `field-700` con un halo radial de `field-500`.
- **Teal de marca** (`brand-teal` #5b7b84 = `field-400`): color del corazón/ECG del logotipo. En la construcción marca los iconos de trazo sobre campo claro, los ticks de mes de beneficios, el `step__when` y el pulgar del scrollbar.

### Secondary
- **Dorado del hito** (`mark-500` #d7b56a): tarjetas de promoción, píldora «15 % OFF» del plan de 3 meses, hitos `tone: mark` sobre la curva, la curva punteada de reganancia (`curve__ghost`) y la leyenda correspondiente. Fuera de la curva aparece solo como superficie del navegador: `::selection`, anillo de `:focus-visible` y enlace «Saltar al contenido». `mark-600` y `mark-050` están definidos pero sin uso en la construcción actual.

### Tertiary
- **Verde WhatsApp** (`wa` #25d366) con tinta `wa-ink` #06281a (declarada en `WaButton`, no en tokens.css) y profundidad `wa-deep` #128c5e (solo en la sombra `--shadow-wa`). Pertenece únicamente al botón de WhatsApp.

### Neutral
- **Lectura clara** (`field-050` #eef3f2): fondo de página (`--bg`), fondo de tarjeta de plan en reposo, texto principal sobre campo oscuro (`--fg` en `.on-field`), pista del scrollbar.
- **Papel** (`paper` #fff): fondo de las secciones de paquetes y FAQ y del cuerpo de la tarjeta de clínica. Valor literal en los componentes, no tokenizado.
- **Tinta** (`ink-900` #1c2426): texto principal sobre campo claro; fondo del tooltip de la curva.
- **Tinta atenuada** (`ink-500` #4e6668 = `brand-teal-deep`): `--fg-muted` sobre campo claro; nota al pie de beneficios.
- **Tinta sobre campo** (`field-200` #b9cbcf, `field-100` #dbe5e7, `field-300` #87a3aa): `field-200` es `--fg-muted` en `.on-field` y la segunda línea del titular; `field-100` el lead del hero y los enlaces del pie; `field-300` iconos del equipo, corazón de la tarjeta de clínica y legales del pie.
- **Líneas** (`line`, `line-strong`): nunca un gris; siempre `field-400` al 28 % / 55 % sobre campo claro, y `field-050` al 18 % / 36 % sobre campo oscuro (redefinidas dentro de `.on-field`). Retícula de la curva, bordes de tarjeta, separadores de lista.
- **Marca** (`brand-teal-deep` #4e6668, `brand-ink` #2f3030): colores del wordmark y del logo oscuro; en la construcción aparecen solo a través de `ink-500` e `ink-700`.

### Named Rules
**La regla de la tinta derivada.** Ningún gris neutro sobre el campo: todo texto, línea o icono secundario es un paso de la escala `field-*` o `ink-*`. `.on-field` redefine `--fg`, `--fg-muted`, `--line` y `--line-strong`; los componentes consumen las variables semánticas, no los pasos crudos.

**La regla del hito.** El dorado marca algo que sucede en un mes de la curva (promoción, separación, reganancia). No es color de título, de icono ni de fondo de sección.

**La regla de la única voz verde.** El verde WhatsApp solo existe en `WaButton`. Ningún otro elemento lo toma prestado, ni siquiera un icono de teléfono.

## Typography

**Display Font:** Bricolage Grotesque (fallback Onest, system-ui), pesos 400–800 vía `@nuxt/fonts` (Google), con `font-variation-settings: 'opsz' 96, 'wdth' 100` en todos los títulos.
**Body Font:** Onest (fallback system-ui, -apple-system, Segoe UI), pesos 400–700.
**Label/Mono Font:** no hay monoespaciada; las cifras usan `.num` (`tabular-nums lining-nums`) en la familia que corresponda.

**Character:** Un display grotesco de ojo grande y tracking negativo (−0.03em a −0.04em) que se reapila sin encoger, frente a un cuerpo geométrico tranquilo. Las cifras (porcentajes, precio, meses) adoptan el display a tamaño de titular: son el sustituto de la fotografía.

### Hierarchy
- **Display** (800, `clamp(2.4rem, 1.2rem + 4vw, 4.6rem)`, 0.98, −0.03em): el `h1` del hero («Baja de peso con GLP-1…», máx. 12–14ch) y el `h2` del cierre. La segunda línea del titular baja a 500 en `field-200`.
- **Numeral** (800, `clamp(2.6rem, 1.4rem + 5vw, 4.75rem)`, 0.95, −0.04em, tabular): el precio «$4,500» con count-up; los porcentajes de promoción usan la misma receta en `clamp(2.6rem, 1.6rem + 4vw, 4.5rem)` con línea 0.9 y el «OFF» al 0.38em.
- **Headline** (700, `clamp(1.9rem, 1.2rem + 2.6vw, 3.25rem)`, 1.15, −0.015em): todos los `h2` de sección, máx. 22ch dentro de `.sec-head`.
- **Title** (600, `clamp(1.25rem, 1.05rem + 0.8vw, 1.6rem)`, 1.15): `h3` de beneficio, paso, promoción, clínica, equipo; también el `summary` del FAQ. Los meses del plan suben a 800 en `clamp(1.6rem, 1.3rem + 1.2vw, 2.4rem)`.
- **Lead** (400, `clamp(1.05rem, 0.95rem + 0.5vw, 1.3rem)`, 1.55): primer párrafo de cada sección, en `--fg-muted` o `field-100`/`field-200`; máx. 44–62ch.
- **Body** (400, 1rem, 1.55): párrafos, máx. `--measure` 62ch (40–52ch en listas).
- **Label** (500–600, 0.875rem, tabular): anotación de mes (`MonthPin`), `step__when`, enlaces de nav, horarios, leyenda de la curva, texto del `WaButton` (700 en display).
- **Micro** (400, 0.75rem): captions de la curva, legales del pie, píldora «15 % OFF» del plan (700 en display).

### Named Rules
**La regla de la cifra tabular.** Toda cifra que pueda cambiar (precio, porcentaje, mes, hora) lleva `.num`; los números del display se alinean como en una tabla clínica.

**La regla del display que se reapila.** El titular no reduce su clamp en móvil: cambia a una columna y conserva `clamp(2.4rem, …, 4.6rem)`. Encoger el display para que quepa es un defecto.

**La regla de la anotación al lado.** El mes se anota a la derecha del `h2` en `.sec-head` (flex, alineado al pie, con `.pin` a `padding-bottom: 0.35em`), nunca como una línea pequeña encima del título.

## Layout

Contenedor único `.container` de `min(100% − 2·gutter, 76rem)` con gutter fluido `clamp(1rem, 0.5rem + 2.5vw, 2.5rem)`. Ritmo vertical de sección `--section-y: clamp(4rem, 3rem + 5vw, 8rem)`; dentro de la sección, los saltos usan la escala `--space-*` (0.25rem → 7rem) con `space-6`/`space-7` entre bloques y `space-4`/`space-5` dentro de un bloque.

Grillas asimétricas 5/12 + 7/12 son la firma: hero (copy 5fr, curva 7fr a partir de 1200px; 6/6 desde 900px), beneficios (intro sticky 5fr a `top: 100px`, lista 7fr desde 960px), FAQ (título 4fr, lista 8fr desde 960px). Listas de datos (beneficios, pasos, equipo, FAQ) se construyen con un `border-top` de `--line-strong` y separadores `--line`, no con tarjetas. Los paquetes van en 1 → 2 (720px) → 4 columnas (1100px); clínicas y promociones en 1 → 2 (760px / 820px); pasos en 1 → 4 (900px) con el número de paso pasando de absoluto a bloque; el pie en `1.4fr 1fr 1fr 1fr` (820px).

Puntos de quiebre observados (todos en px, `max-width` o `min-width`): 420, 520, 640/641, 700, 720, 760, 820, 900, 960, 1100, 1200. A ≤640px el nav oculta enlaces y CTA, aparece `StickyCta` fijo al pie (con `env(safe-area-inset-bottom)`) y la página recibe `padding-bottom: 84px`. A ≥1200px el hero ocupa `calc(100svh − 72px)` centrado. La curva pasa de proporción 1000/600 a 1000/640 en ≤700px, con ticks más grandes y tarjetas de hito compactas (solo título, radio `sm`).

## Elevation & Depth

Híbrido con jerarquía clara: el campo se estratifica por tono (`field-900` → `field-800` → `field-700`, más gradientes lineales y halos radiales de `field-500`), y las sombras aparecen solo en objetos que flotan sobre el campo. Toda sombra tiene offset y blur y está tintada con el campo (`rgba(22, 41, 45, …)`, es decir `field-900`), nunca negro puro; la del CTA se tiñe con `wa-deep`. El nav al hacer scroll pasa a `field-800` al 82 % con `backdrop-filter: blur(14px) saturate(140%)` y una línea de 1px.

### Shadow Vocabulary
- **Reposo** (`--shadow-sm`: `0 1px 2px rgba(22, 41, 45, 0.08), 0 2px 8px rgba(22, 41, 45, 0.06)`): tarjeta de clínica en reposo.
- **Flotante** (`--shadow-md`: `0 6px 18px rgba(22, 41, 45, 0.12), 0 2px 6px rgba(22, 41, 45, 0.08)`): tarjetas de hito sobre la curva, tooltip del puntero, tarjeta de clínica al hover.
- **Elevado** (`--shadow-lg`: `0 20px 48px rgba(22, 41, 45, 0.22), 0 6px 16px rgba(22, 41, 45, 0.12)`): tarjetas de promoción y paquete activo (que además sube `translateY(-4px)`).
- **CTA** (`--shadow-wa`: `0 10px 28px rgba(18, 140, 94, 0.35), 0 3px 8px rgba(18, 140, 94, 0.2)`): el botón de WhatsApp en reposo; al hover crece a `0 16px 36px rgba(18,140,94,0.4), 0 4px 10px rgba(18,140,94,0.25)` con `translateY(-2px)`.
- **Halo del hito dorado**: `0 0 0 5px color-mix(in oklab, var(--mark-500) 28%, transparent)` en el pin del hito `mark`.

### Named Rules
**La regla de la sombra tintada.** Toda sombra lleva offset vertical, blur y el color del campo (`16, 29, 45` o `18, 140, 94`). Sin sombras duras, sin sombras negras, sin sombras sin offset.

**La regla del campo por tono.** Las secciones no se separan con sombras ni bordes gruesos: se separan cambiando el paso del campo (`field-900` / `field-800` / `field-700` / `field-050` / papel) y, como mucho, un `border-top: 1px solid var(--line)`.

## Shapes

Tres radios y una píldora: `sm` 6px (anillo de foco, tarjeta de hito compacta en móvil), `md` 12px (tarjetas de hito, tooltip, enlace «Saltar al contenido»), `lg` 20px (tarjetas de plan, promoción y clínica), `pill` 999px (todos los botones y chips, pulgar del scrollbar). Los círculos son literales: número de paso (2.4rem, `field-700`), pins de hito (14px con borde de 3px), punto del lápiz de la curva (r=6 con halo r=14 pulsante).

Bordes finos y derivados del campo: 1px `--line` en tarjetas y separadores, 1.5px `--line` en tarjeta de plan y `--line-strong` en chips de contorno y en el botón fantasma (como `inset box-shadow`). Trazos SVG con `vector-effect: non-scaling-stroke`: curva principal 3.5, curva en miniatura 2.5, rango del pin 3, guías 1 con dasharray `3 4` / `4 5`, curva de reganancia 3 con dasharray `2 9`. Remates y uniones siempre redondos, en la curva y en los iconos.

## Components

Los componentes son pocos y todos nacen de la curva: botón píldora, chips píldora, tres tarjetas de radio 20px, listas con separadores, y la gráfica con sus anotaciones. Carácter: tácticos y con masa; se mueven con `--ease-ballistic` y frenan sin rebote.

### Buttons (`WaButton`)
- **Shape:** píldora (999px), `inline-flex` con icono WhatsApp (20/24px), etiqueta y flecha (18px) a `gap: 0.6em`.
- **Primary (`wa`):** fondo `wa`, tinta `wa-ink`, display 700 a 1rem con tracking −0.01em, padding `0.85em 1.35em 0.85em 1.15em`, `--shadow-wa`. Variante `lg`: `clamp(1.05rem, 1rem + 0.4vw, 1.25rem)` y padding `1em 1.5em 1em 1.25em`. En nav: 0.9rem con padding `0.7em 1.1em 0.7em 0.95em`. `block` lo estira al ancho completo (sticky y plan).
- **Hover / Focus:** sube 2px y agranda la sombra (`--dur-base`, `--ease-ballistic`); un brillo lineal `110deg` cruza de −120 % a 120 % en 0.9s; la flecha avanza 4px. Activo: `scale(0.985)`. Foco: anillo global `3px solid mark-500` con offset 3px.
- **Ghost:** fondo transparente, tinta `--fg`, `inset 0 0 0 1.5px var(--line-strong)`; al hover el anillo toma `--fg`. Se usa en los paquetes no activos.
- Texto por defecto «Quiero saber si soy candidato»; cada instancia puede llevar un `message` propio para el enlace `wa.me`.

### Chips
- **Campo** (`chip-field`): `field-700` sobre `field-050`, 700, small, «100 % personalizado» junto al precio.
- **Hito** (`chip-mark`): `mark-500` con tinta `field-900`, display 700, micro con tracking 0.01em, «15 % OFF de contado» en el plan de 3 meses. Invertido (`field-900` sobre dorado) como «Mes 0 / Mes 3» en la esquina de la tarjeta de promoción.
- **Contorno** (`chip-outline`): borde 1.5px `--line-strong`, tinta `field-050`, display 700, etiqueta corta de la clínica sobre su cabecera teal.

### Cards / Containers
- **Paquete** (`card-plan`): radio 20px, `field-050`, borde 1.5px `--line`, padding `space-5`, grid con gap `space-2`. Activo (hover o clic): fondo y borde `field-700`, tinta `field-050`, `translateY(-4px)`, `--shadow-lg`; el CTA cambia de `ghost` a `wa`. Separador interno 1px `--line` antes del precio.
- **Promoción** (`card-promo`): radio 20px, `mark-500` sobre `field-900`, tinta `field-900`, padding `space-6`, `--shadow-lg`, brillo radial blanco al 35 % desde la esquina superior derecha. Porcentaje en numeral 800 a la izquierda, cuerpo a la derecha, chip de mes en la esquina (pasa arriba en ≤520px).
- **Clínica** (`card-clinic`): radio 20px, papel blanco, borde 1px `--line`, `--shadow-sm`; cabecera `.on-field` en `field-700` con chip de contorno y el isotipo `heart.svg` a 34px en `field-300`; cuerpo `space-5` con dirección, horarios en `dl` de dos columnas y enlaces de acción. Hover: sube 3px, `--shadow-md`.
- **Hito sobre la curva** (`milestone-card`): radio 12px, `--bg` con borde `--line` y `--shadow-md` (o `mark-500` sin borde para `tone: mark`), padding `0.5rem 0.7rem`, display 700 + small muted; posicionado en 8 direcciones (`n s e w ne nw se sw`) respecto a su pin.

### Lists with separators
Beneficios, pasos, equipo y FAQ no son tarjetas: `border-top: 1px solid var(--line-strong)` en la lista y `border-bottom: 1px solid var(--line)` por fila, padding vertical `space-5`. El beneficio reserva una columna de 5.5rem para el tick de mes (display 700, `brand-teal`); el paso lleva un círculo numerado 2.4rem en `field-700`; el FAQ usa `details/summary` con chevron de trazo que rota 180° con `--ease-ballistic`.

### Navigation (`SiteNav`)
- Sticky, 72px mínimo, `field-800`, logo blanco de `clamp(150px, 12vw, 190px)`, enlaces en small 500 `field-200` con subrayado de 2px que escala desde la izquierda al hover (`field-050`), CTA píldora a la derecha. Al pasar 24px de scroll: fondo al 82 % con blur 14px y una línea `--line` de 1px. Enlaces solo desde 900px; CTA oculto a ≤640px (lo reemplaza `StickyCta`, que entra con `translateY` balístico sobre un degradado a `field-900` al 92 %).

### WeightCurve (componente firma)
`figure` con SVG 1000×600 (`overflow: visible`, cursor crosshair): retícula de 13 líneas de mes en `--line`, eje en `--line-strong`, área bajo la curva con gradiente de `currentColor` al 14 % recortada por `clip-path` al avance del trazo, curva principal en `--curve-ink` (`field-050` sobre campo) 3.5px dibujada por `stroke-dashoffset` con `easeOutExpo` durante 2400–3000ms, lápiz (punto r=6 + halo r=14 que pulsa 2.2s), ticks en Onest 500 a 20px (30px en móvil) con tabulares y nombres de eje en versalita de 17px con tracking 0.04em. Los hitos son HTML posicionado en porcentaje que entra (`opacity`, pin `scale(0.2 → 1)`, tarjeta `translateY(8px → 0)`) cuando el lápiz alcanza su mes. Modo `compare`: segunda curva punteada en `mark-500` desde el mes 5 que se dibuja después de la principal, con leyenda (swatch 22×3px sólido / punteado). Puntero: guía vertical discontinua, sonda r=7 y tooltip en `--fg`/`--bg` con mes y fase, que se voltea pasado el 62 % del ancho. Con `prefers-reduced-motion` todo aparece ya dibujado. Siempre con `figcaption` micro que declara la curva como ilustrativa.

### MonthPin (anotación de mes)
`inline-flex` de 64×34px con la misma `pathFor(weightAt)` a 2.5px al 55 %, guía discontinua, rango opcional de 3px, punto r=26 con relleno `--bg` y borde `--fg`, seguido de la etiqueta small 600 tabular («Mes 3 – 12+ · tu plan»). Va a la derecha del `h2` dentro de `.sec-head` y hereda `--fg-muted` del campo donde está.

### IconGlyph
Set propio de 17 glifos en un `viewBox` 24, `stroke-width: 1.75`, remates y uniones redondos, `fill: none`, `currentColor`. Tamaños usados: 16, 18, 20, 22, 24. Sobre campo claro toman `brand-teal`; sobre campo oscuro `field-300`.

### Motion
`--ease-out` (expo-out) para opacidad, color y sombra; `--ease-ballistic` (quint-out) para todo lo que se desplaza (botón, flecha, chevron, tarjeta de plan, sticky). Duraciones `--dur-fast` 180ms (hover de fondo, tooltip), `--dur-base` 420ms (transformaciones), `--dur-slow` 900ms (revelado y hitos), `--dur-draw` 2400ms (curva). El revelado `[data-reveal]` parte de `translateY(28px)` con `blur(6px)` y solo se activa con la clase `.js`; `prefers-reduced-motion` anula todo a 0.01ms y pinta la curva completa.

## Do's and Don'ts

### Do:
- **Do** colocar toda sección oscura bajo `.on-field` y consumir `--fg`, `--fg-muted`, `--line`, `--line-strong`; nunca un paso `ink-*` sobre el campo.
- **Do** anotar el mes de cada sección con `MonthPin` a la derecha del `h2` dentro de `.sec-head`.
- **Do** usar `.num` en cualquier cifra (precio, porcentaje, mes, hora) y el display 800 con tracking −0.04em para la cifra protagonista.
- **Do** reservar `mark-500` para hitos de la curva (promociones y reganancia) y las superficies del navegador (`::selection`, `:focus-visible`, skip link).
- **Do** usar píldora (999px) para todo botón y chip, y 20px para toda tarjeta de contenido.
- **Do** tintar cada sombra con `rgba(22, 41, 45, …)` y darle offset y blur; `--shadow-wa` solo para el CTA.
- **Do** mover lo que se desplaza con `--ease-ballistic` y lo que cambia de color u opacidad con `--ease-out`; mantener el revelado dependiente de `.js` y anulado en `prefers-reduced-motion`.
- **Do** presentar listas de datos (beneficios, pasos, equipo, FAQ) como filas con separadores `--line`/`--line-strong`, no como tarjetas.

### Don't:
- **Don't** usar kickers o eyebrows (línea pequeña en mayúsculas o color encima de un título); la única anotación admitida es el mes, al lado.
- **Don't** construir filas de tarjetas icono+título+texto; los iconos de trazo acompañan texto en línea (`hero__facts`, `team__name`, `clinic__addr`), no encabezan tarjetas.
- **Don't** introducir grises neutros (`#888`, `#ccc`, `gray-*`); toda tinta secundaria es un paso de `field-*` o `ink-*`.
- **Don't** usar el verde WhatsApp fuera de `WaButton` ni el dorado como color de título, icono o fondo de sección.
- **Don't** reducir el clamp del display en móvil; el titular se reapila en una columna a su tamaño.
- **Don't** usar sombras negras, duras o sin offset, ni separar secciones con sombras: el campo cambia de paso.
- **Don't** sustituir `IconGlyph` por un paquete de iconos ni por glifos de sistema; cualquier icono nuevo se dibuja en el mismo trazo 1.75 con remates redondos.
- **Don't** mostrar la curva sin su `figcaption` «ilustrativa»; ninguna cifra de resultado propia se dramatiza en ella.
