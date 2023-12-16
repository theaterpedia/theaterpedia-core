export default defineNuxtConfig({
  extends: [
          '@crearis/theme-main',
          '@crearis/data-main'
        ],
  // #TODO _05 html-validation modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: { enabled: true },
})

