// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Product page generated on-demand, revalidates in background
    "/products/**": { swr: true },
    // Blog post generated on-demand once until next deploy
    "/blog/**": { isr: true },
  },
});
