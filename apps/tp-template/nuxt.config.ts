export default defineNuxtConfig({
  extends: [
          '@crearis/theme-main',
          '@crearis/data-main'
        ],
  modules: [
    '@nuxthq/studio'
  ],
  nitro: {
    prerender: {
      routes: ['/'],
      ignore: [
      '/product/',]
    }
    }, // #TODO _05 enable-full-nitro-prerender
  // #TODO _05 html-validation modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: { enabled: true },
})

