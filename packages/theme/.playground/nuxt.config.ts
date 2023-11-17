// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '..',
    './packages/data',
    './packages/base',
  ],  
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Theaterpedia (Theme Playground)' },
      ],
    },
  },
  appConfig: {
    titleSuffix: 'Theaterpedia (Theme Playground)',
  },
  pwa: {
    manifest: {
      name: 'Theaterpedia (Theme Playground)',
      short_name: 'TheaterpediaPlayground',
      icons: [
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  },
});
