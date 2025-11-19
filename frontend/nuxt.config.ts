// https://nuxt.com/docs/api/configuration/nuxt-config
const defaultStrapiUrl =
  process.env.NUXT_PUBLIC_STRAPI_URL ||
  process.env.NUXT_PUBLIC_API_URL ||
  process.env.STRAPI_URL ||
  'http://localhost:1337'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  css: ['@/assets/css/main.css'],
  strapi: {
    // Used by @nuxtjs/strapi; can still be overridden at runtime via NUXT_PUBLIC_STRAPI__URL / NUXT_STRAPI__URL
    url: defaultStrapiUrl,
    version: 'v5',
    prefix: '/api'
  },
  runtimeConfig: {
    // Values can be overridden at runtime via env vars, e.g. NUXT_PUBLIC_STRAPI_URL / STRAPI_URL
    public: {
      strapiUrl: defaultStrapiUrl
    },
    strapiUrl: defaultStrapiUrl
  },
  app: {
    head: {
      title: 'Lippe Tennis Union — Tennis in Lippe',
      meta: [
        { name: 'description', content: 'Offizieller Webauftritt der Lippe Tennis Union — Tennis, Training, Events und Community in Lippe.' },
        { property: 'og:title', content: 'Lippe Tennis Union' },
        { property: 'og:description', content: 'Tennis. Leidenschaft. Gemeinschaft.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
