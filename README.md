# VitaClinic · Landing GLP‑1

Landing de captación para el tratamiento de control de peso con GLP‑1 de VitaClinic (CDMX). Nuxt 4, prerender estático, SEO completo, 100% responsiva.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # build estático en .output/public
npm run preview    # previsualiza el build
```

Despliegue: sube la carpeta `.output/public` a cualquier hosting estático (Netlify, Vercel, Hostinger, Cloudflare Pages).
Dominio de producción: `https://www.vitacliniccdmx.com` (valor por defecto en `nuxt.config.ts`; el dominio sin `www` redirige a este). Para otro dominio, define `NUXT_PUBLIC_SITE_URL` al generar.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `app/pages/index.vue` | Página única: meta SEO, JSON‑LD (Organization, 2× MedicalClinic, MedicalTherapy + Offer, FAQPage) y composición de secciones |
| `app/components/Section*.vue` | Secciones: Hero (con equipo recortado y curva), Benefits (paso a paso), Plans (precios e incluye), FollowUp (seguimiento), Steps (cómo funciona), Clinics, Team (qué nos hace diferentes), Faq, Close |
| `app/components/WeightCurve.vue` | La curva ilustrativa (SVG) que estructura la página: dibujo animado, hitos, comparación con/sin seguimiento, tooltip por mes |
| `app/components/WaButton.vue` | Botón a WhatsApp (+52 5510121154) con texto «Quiero saber si soy candidato» |
| `app/data/clinic.ts` | Marca, promociones, clínicas (direcciones, horarios, mapas), duraciones (paquetes), precio |
| `app/data/faq.ts` | Preguntas frecuentes (también alimentan el FAQPage JSON‑LD) |
| `app/assets/css/tokens.css` | Tokens de diseño (paleta derivada de los logos, tipografía, espacio, movimiento) |
| `public/brand/` | Logotipos originales (PNG) y el isotipo vectorizado `heart.svg` |

## Contenido que debes revisar o reemplazar

- **Promoción 15% (3 meses de contado)**: ya no tiene sección propia; solo se menciona en preguntas frecuentes (`app/data/faq.ts`).
- **Sin testimonios ni perfiles de doctores** por indicación del cliente (2026-10-20). La landing es informativa y promocional: tratamiento, paquetes, consultorios.
- **Paquetes**: 3, 5, 7 meses y más de 1 año, con «cotización personalizada». Precio base por medicamento en `pricing.meds` de `app/data/clinic.ts` (semaglutida $3,499, tirzepatida $4,499).
- **Fotos del equipo** (`public/team/`): `equipo.webp` (hero), `medico.webp`, `nutriologa.webp` y `psicologa.webp` son imágenes proporcionadas por el cliente con el fondo quitado. `enfermera.webp` sigue siendo foto de stock de Pexels (pexels.com/photo/27666717) hasta tener una del cliente.
- **Curva de peso**: es ilustrativa y está etiquetada así en pantalla. No representa datos de pacientes.
- **Imagen OG** (`public/og.png`): captura del hero. Regénerala si cambias el titular.

## SEO

Palabras clave del cliente en `app/data/seo.ts`. Se usan en el título y la descripción, en la etiqueta `keywords`, en el JSON‑LD (`knowsAbout`, `healthCondition`, `drug`) y como texto visible en la sección de condiciones (`SectionConditions.vue`) y en preguntas frecuentes, que es lo que realmente cuenta para Google.

## Marca

Colores muestreados de los logotipos: slate‑teal `#5B7B84`, teal profundo `#4E6668`, carbón `#2F3030`. El campo oscuro de la página (`#223B41` → `#16292D`) es una extensión del teal de marca. Acento dorado `#D7B56A` reservado a promociones.
