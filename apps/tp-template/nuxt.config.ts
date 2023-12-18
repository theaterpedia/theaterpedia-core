export default defineNuxtConfig({
  extends: [
          '@crearis/theme-main',
          '@crearis/data-main'
        ],
  ssr: false, // #TODO _06 re-enableSSR and test on github-pages
  // #TODO _05 html-validation modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: { enabled: true },
})

