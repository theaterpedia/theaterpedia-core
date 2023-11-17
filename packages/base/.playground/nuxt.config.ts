export default defineNuxtConfig({
  extends: ['..'],
  // https://content.nuxtjs.org
  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})
