// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["pruvious"],
  runtimeConfig: {
    redisLogUrl: 'redis://127.0.0.1:6379/2',
  },
  pruvious: {
    api: {
      routes: {
        'pages.get': false,
        'previews.get': false,
        'robots.txt.get': false,
        'sitemap.xml.get': false,
      },
    },
    jwt: {
      secretKey: "xxx",
    },
    standardCollections: {
      pages: false,
      presets: false,
      previews: false,
      redirects: false,
      seo: false,
      uploads: false,
    },
  }
})
