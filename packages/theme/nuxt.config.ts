// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'github:theaterpedia/theaterpedia-core/packages/data#courses/tryGitLogic',
    'github:theaterpedia/theaterpedia-core/packages/base#courses/tryGitLogic'
  ],
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Theaterpedia Theme' },
      ],
    },
  },
  appConfig: {
    titleSuffix: 'Theaterpedia Theme',
  },
  css: ['~/assets/style.scss'],
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Red Hat Display': [400, 500, 700],
          'Red Hat Text': [300, 400, 500, 700],
        },
      },
    ],
    '@nuxt/image',
    'nuxt-lazy-hydrate',
  ],
  image: {
    screens: {
      '4xl': 1920,
      '3xl': 1536,
      '2xl': 1366,
      xl: 1280,
      lg: 1024,
      md: 768,
      sm: 640,
      xs: 376,
      '2xs': 360,
    },
  },
})

