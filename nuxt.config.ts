// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    "~/assets/style/main.scss",
  ],
  routeRules: {
    '/': { ssr: true },
    '/profile': { swr: 60 },
    '/login': { swr: 60 },
  },
})
