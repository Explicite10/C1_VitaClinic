<script setup lang="ts">
import { brand, clinics, pricing, promos } from '~/data/clinic'
import { faqs } from '~/data/faq'

const config = useRuntimeConfig().public
const siteUrl = config.siteUrl
const title = 'Tratamiento GLP‑1 para bajar de peso en CDMX | VitaClinic'
const description =
  'Baja de peso con GLP‑1 (semaglutida o tirzepatida) y seguimiento médico, nutricional y psicológico. Planes de 3, 5, 7 meses o más de 1 año, desde $4,500 MXN. 10% OFF primera consulta. Clínicas en Centro y WTC, CDMX.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'VitaClinic: tratamiento GLP‑1 con seguimiento completo en CDMX',
  ogType: 'website',
  ogLocale: 'es_MX',
  ogSiteName: 'VitaClinic',
  ogUrl: siteUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/og.png`,
  robots: 'index, follow, max-image-preview:large',
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
})

const { href: waHref } = useWhatsApp()

const clinicNodes = clinics.map((c) => ({
  '@type': 'MedicalClinic',
  '@id': `${siteUrl}/#${c.id}`,
  name: `${brand.name} · ${c.name}`,
  url: siteUrl,
  telephone: '+52 55 1012 1154',
  image: `${siteUrl}/og.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: c.address,
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    postalCode: c.locality.match(/\d{5}/)?.[0],
    addressCountry: 'MX',
  },
  openingHours: c.openingHoursSpec,
  hasMap: c.mapsUrl,
  medicalSpecialty: ['Endocrinology', 'Dietetic', 'Psychiatric'],
  priceRange: '$$',
}))

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#org`,
      name: brand.name,
      alternateName: `${brand.name} ${brand.tagline}`,
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      sameAs: [brand.instagram],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+525565356274',
        url: waHref,
        availableLanguage: 'es',
      },
    },
    ...clinicNodes,
    {
      '@type': 'MedicalTherapy',
      '@id': `${siteUrl}/#tratamiento`,
      name: 'Tratamiento de control de peso con agonistas de GLP‑1',
      description:
        'Tratamiento médico personalizado con semaglutida o tirzepatida, con seguimiento médico, nutricional y psicológico. Duración de 3, 5, 7 meses o más de un año.',
      provider: { '@id': `${siteUrl}/#org` },
      offers: {
        '@type': 'Offer',
        price: pricing.from,
        priceCurrency: pricing.currency,
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: pricing.from,
          priceCurrency: pricing.currency,
          valueAddedTaxIncluded: true,
        },
        availability: 'https://schema.org/InStock',
        url: siteUrl,
        description: promos.map((p) => p.title).join(' · '),
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      inLanguage: 'es-MX',
      isPartOf: { '@id': `${siteUrl}/#org` },
    },
  ],
}

useHead({
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }],
})

useReveal()
</script>

<template>
  <div class="page">
    <a href="#inicio" class="skip">Saltar al contenido</a>
    <SiteNav />
    <main>
      <SectionHero />
      <SectionPromos />
      <SectionBenefits />
      <SectionPlans />
      <SectionFollowUp />
      <SectionSteps />
      <SectionClinics />
      <SectionFaq />
      <SectionClose />
    </main>
    <SiteFooter />
    <StickyCta />
  </div>
</template>

<style scoped>
.page {
  background: var(--bg);
}
@media (max-width: 640px) {
  .page {
    padding-bottom: 84px;
  }
}
.skip {
  position: absolute;
  left: var(--space-4);
  top: -100px;
  z-index: 100;
  padding: 0.6em 1em;
  border-radius: var(--radius-md);
  background: var(--mark-500);
  color: var(--field-900);
  font-weight: 700;
  text-decoration: none;
  transition: top var(--dur-fast) var(--ease-out);
}
.skip:focus {
  top: var(--space-4);
}
</style>
