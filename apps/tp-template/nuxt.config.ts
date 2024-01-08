export default defineNuxtConfig({
  extends: [
          '@crearis/theme-thin',
          '@crearis/data-thin'
        ],
  modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: { enabled: true },
});

