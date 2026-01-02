export default defineNuxtConfig({
  compatibilityDate: '2026-01-03',
  css: ['~/assets/css/global.css'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'ja',
    locales: [
      { code: 'ja', file: 'ja.json' },
      { code: 'en', file: 'en.json' },
      { code: 'zh-CN', file: 'zh-CN.json' },
    ],
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  imports: {
    scan: false,
  },
});
