export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: {
    dirs: [
      {
        path: '~/components/ui', // Shadcn bileşenlerinizin yolu
        extensions: ['vue'], // Sadece .vue dosyalarını bileşen olarak tanı
        global: true,
        // Bu, index.ts/js dosyalarının bileşen olarak algılanmasını engeller.
      },
      '~/components', // Diğer bileşenleriniz
    ],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
      // ... eski postcss.config.js dosyanızdaki diğer pluginler
    },
  }
})