// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'github:theaterpedia/theaterpedia-core/packages/base#courses/tryGitLogic'
  ],
  appConfig: {
    titleSuffix: 'Theaterpedia Data (SDK)',
  },
})

