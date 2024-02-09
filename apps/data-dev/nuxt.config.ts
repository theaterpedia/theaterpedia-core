import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))
const isRootDir = !(currentDir.endsWith('apps/data-dev'))

export default defineNuxtConfig({
  extends: [
    '@crearis/theme-main',
    '@crearis/data-main',
  ],

  i18n: {
    // if you are using custom path, default
    vueI18n: isRootDir ? './node_modules/@crearis/theme-main/i18n.config.ts' : '../../node_modules/@crearis/theme-main/i18n.config.ts',
  },
  
  vsf: {
    middleware: {
      apiUrl: 'http://localhost:3002',
    },
  },

  modules: ['@nuxt/test-utils'],

  nitro: {
    prerender: {
      ignore: [
        '/product/',
        '/category',
        '/cart',
        '/checkout',
        '/search',
        '/my-account',
        '/order/success',
        '/order/failed',
        '/my-account/personal-data',
        '/my-account/billing-details',
        '/my-account/shipping-details',
        '/my-account/my-orders',
        '/my-account/returns',
        '/reset-password',
        '/reset-password-success',
        '/set-new-password',
        '/login',
        '/signup',
      ],
    },
  },
  // #TODO _05 enable-full-nitro-prerender
  // #TODO _05 html-validation modules: ['nuxt-hydration', '@nuxtjs/html-validator'],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
})
