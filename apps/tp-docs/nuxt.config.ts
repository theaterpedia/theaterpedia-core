export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxt/ui'
  ],
  ui: {
    icons: ['ph', 'simple-icons']
  },
  colorMode: {
    preference: 'dark'
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  fontMetrics: {
    fonts: ['DM Sans']
  }
})