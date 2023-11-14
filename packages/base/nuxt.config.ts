// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxthq/studio'
  ],
  // https://content.nuxtjs.org
  content: {
    documentDriven: true
  }
})