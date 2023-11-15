import { DESIGN } from './constants'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],
  extends: [
    '..',
    "@crearis/base"
  ],
  devtools: { enabled: true },
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: `${DESIGN.THEMES.theaterpedia}-${DESIGN.VARIANTS.flip}`, // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  // to be configured in .env (see https://nuxt.com/docs/getting-started/configuration)
  runtimeConfig: {
    otploginMail: 'max@mustermann.org',
    pwloginMail: 'max@mustermann.org',
    pwloginPw: 'passwort'
  },
})
