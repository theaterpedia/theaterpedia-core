// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
  },
  modules: [
    '@vite-pwa/nuxt',
    'nuxt-vitest',
    '@nuxt/content',
    '@nuxthq/studio',
    '@vue-storefront/nuxt',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },
  vsf: {
    middleware: {
      apiUrl: 'http://localhost:3000',
    },
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
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,json,css,html,ico,svg,png,webp,ico,woff,woff2,ttf,eit,otf}', 'icons/*'],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkOnly',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },
    manifest: {
      name: 'VSF x Nuxt3 (Boilerplate)',
      short_name: 'VSFNuxt3Boilerplate',
      theme_color: '#018937',
      icons: [
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
  },
});
