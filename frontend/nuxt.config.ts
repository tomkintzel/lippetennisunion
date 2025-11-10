// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    version: 'v5',
    prefix: '/api'
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