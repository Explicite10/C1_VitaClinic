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
Define `NUXT_PUBLIC_SITE_URL=https://tu-dominio.com` al generar para que canonical, sitemap, robots y Open Graph apunten al dominio real.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `app/pages/index.vue` | Página única: meta SEO, JSON‑LD (Organization, 2× MedicalClinic, MedicalTherapy + Offer, FAQPage) y composición de secciones |
| `app/components/Section*.vue` | Secciones: Hero, Promos, Benefits (tratamiento), Plans (paquetes y precio), FollowUp (seguimiento), Steps (cómo funciona), Clinics, Faq, Close |
| `app/components/WeightCurve.vue` | La curva ilustrativa (SVG) que estructura la página: dibujo animado, hitos, comparación con/sin seguimiento, tooltip por mes |
| `app/components/MonthPin.vue` | Anotación de mes junto a cada título: el hilo que une las secciones con la curva |
| `app/components/WaButton.vue` | Botón a WhatsApp (55 6535 6274) con texto «Quiero saber si soy candidato» |
| `app/data/clinic.ts` | Marca, promociones, clínicas (direcciones, horarios, mapas), duraciones (paquetes), precio |
| `app/data/faq.ts` | Preguntas frecuentes (también alimentan el FAQPage JSON‑LD) |
| `app/assets/css/tokens.css` | Tokens de diseño (paleta derivada de los logos, tipografía, espacio, movimiento) |
| `public/brand/` | Logotipos originales (PNG) y el isotipo vectorizado `heart.svg` |

## Contenido que debes revisar o reemplazar

- **Vigencia de promociones**: hoy dice «por tiempo limitado» sin fecha. Edita `promos` en `app/data/clinic.ts`.
- **Sin testimonios ni perfiles de doctores** por indicación del cliente (2026-10-20). La landing es informativa y promocional: tratamiento, paquetes, consultorios.
- **Paquetes**: 3, 5, 7 meses y más de 1 año, con «cotización personalizada». Si el cliente define precios por paquete, van en `durations` de `app/data/clinic.ts`.
- **Curva de peso**: es ilustrativa y está etiquetada así en pantalla. No representa datos de pacientes.
- **Imagen OG** (`public/og.png`): captura del hero. Regénerala si cambias el titular.

## Marca

Colores muestreados de los logotipos: slate‑teal `#5B7B84`, teal profundo `#4E6668`, carbón `#2F3030`. El campo oscuro de la página (`#223B41` → `#16292D`) es una extensión del teal de marca. Acento dorado `#D7B56A` reservado a promociones.
