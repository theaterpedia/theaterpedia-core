// #TODO _06 Exportable-Layers-Paths
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
// make tailwind-config, lang, i18n.config, etc. exportable from theme-main


import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))


// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { name: 'description', content: 'CREARIS courses.main (Boilerplate)' },
        { name: 'theme-color', content: '#018937' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' },
      ],
    },
  },
  appConfig: {
    titleSuffix: 'CREARIS courses.main Boilerplate',
  },
  image: {
    dir: join(currentDir, './public'),
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
  runtimeConfig: {
    // for getImages plugin
    public: {
      odooBaseUrl: ''
    }
  },
  routeRules: {
    // #TODO _05 try normal singlequotes
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },
  i18n: {
    // if you are using custom path, default
    vueI18n: join(currentDir, './i18n.config.ts')
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Red Hat Display': [400, 500, 700],
          'Red Hat Text': [300, 400, 500, 700],
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
          {
            code: 'de',
            file: 'de.json',
          },
        ],
        lazy: true,
        langDir: join(currentDir, './lang'),
        defaultLocale: 'de',
      },
    ],
    '@nuxt/image',
    'nuxt-vitest',
    'nuxt-lazy-hydrate',
    '@vue-storefront/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: join(currentDir, './assets/style.scss'),
  },
  vsf: {
    middleware: {
      apiUrl: 'http://localhost:3000',
    },
  },
});
