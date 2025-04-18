import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    "@vite-pwa/nuxt",
],
runtimeConfig: {
  public: {
    bucketUrl: process.env.BUCKET_URL
  }
},
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});