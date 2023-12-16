export default defineNuxtConfig({
  extends: [
          '@crearis/theme-main',
          '@crearis/data-main'
        ],
  devtools: { enabled: true },
  modules: [
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
        langDir: 'lang',
        defaultLocale: 'en',
      },
    ],
  ],
})

