// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  modules: [
    'nuxt-lodash',
    '@nuxt/content',
    '@nuxthq/studio'
  ],
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },
  vite: {
    optimizeDeps: {
      include: ['lodash-es'],
    },
  },
  build: {
    transpile: [
      'tslib',
      '@apollo/client',
      '@apollo/client/core',
      '@vue/apollo-composable',
      '@vue/apollo-option',
      'ts-invariant',
      '@erpgap/odoo-sdk-api-client'
    ]
  },  
  runtimeConfig: {
    public: {
      odooBaseUrl: ''
    }
  },
});
