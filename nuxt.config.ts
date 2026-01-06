export default defineNuxtConfig({
  compatibilityDate: '2026-01-03',
  modules: ['@nuxtjs/i18n'],
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  imports: {
    scan: false,
  },
  components: {
    dirs: [],
  },
  i18n: {
    strategy: 'no_prefix',
    baseUrl: 'kodai.engineer',
    defaultLocale: 'ja',
    locales: [
      { code: 'ja', file: 'ja.json', language: 'ja' },
      { code: 'en', file: 'en.json', language: 'en' },
      { code: 'zh-CN', file: 'zh-CN.json', language: 'zh-CN' },
    ],
  },
  css: ['~/assets/css/global.css'],
});
