// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    ['@pinia/nuxt', 
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  app: {
    head: {
      title: 'Fake Store',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://fakestoreapi.com'
    }
  }
})
