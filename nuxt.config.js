// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
      'Space Grotesk': [500, 600, 700]
    },
    display: 'swap'
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})

