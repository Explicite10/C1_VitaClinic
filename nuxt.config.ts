// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://vitaclinic.mx'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: true,

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/fonts'],

  site: {
    url: siteUrl,
    name: 'VitaClinic · Tratamiento GLP-1 en CDMX',
    defaultLocale: 'es-MX',
  },

  runtimeConfig: {
    public: {
      siteUrl,
      whatsapp: '525510121154',
      whatsappDisplay: '+52 5510121154',
      whatsappMessage: 'Hola, quiero saber si soy candidato al tratamiento GLP-1 de VitaClinic.',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es-MX' },
      titleTemplate: '%s',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#223B41' },
        { name: 'format-detection', content: 'telephone=yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  css: ['~/assets/css/tokens.css', '~/assets/css/base.css'],

  fonts: {
    families: [
      { name: 'Bricolage Grotesque', provider: 'google', weights: [400, 500, 600, 700, 800], styles: ['normal'] },
      { name: 'Onest', provider: 'google', weights: [400, 500, 600, 700], styles: ['normal'] },
    ],
    defaults: { preload: true },
  },


  sitemap: {
    xslColumns: [{ label: 'URL', width: '100%' }],
  },

  robots: {
    allow: '/',
    sitemap: `${siteUrl}/sitemap.xml`,
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  vite: {
    build: { cssCodeSplit: true },
  },
})
