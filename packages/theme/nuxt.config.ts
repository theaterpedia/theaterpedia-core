// #TODO _06 Exportable-Layers-Paths
// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
// make tailwind-config, lang, i18n.config, etc. exportable from theme-main      

/*
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))
*/

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
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
    dir: '../../node_modules/@crearis/theme-main/public',
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
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },    
  i18n: {
    vueI18n: '../../node_modules/@crearis/theme-main/i18n.config.ts' // if you are using custom path, default 
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
        ],
        lazy: true,
        langDir: '../../node_modules/@crearis/theme-main/lang',
        defaultLocale: 'en',
      },
    ],
    '@nuxt/image',
    'nuxt-vitest',
    'nuxt-lazy-hydrate',
    '@vue-storefront/nuxt',
  ], 
  tailwindcss: {
    exposeConfig: true,
    cssPath: '../../node_modules/@crearis/theme-main/assets/style.scss',
  },
  vsf: {
    middleware: {
      apiUrl: 'http://localhost:3000',
    },
  },
});
