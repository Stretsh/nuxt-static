// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-static/',
    buildAssetsDir: 'assets'
  },
  devServer: {
    port: 3300
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  // components: {
  //   global: true,
  //   dirs: ['~/components'],
  // },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      preload: ['javascript', 'vue', 'html'],
      theme: 'monokai',
    },
  },
})
