import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../server/public')
    },
  },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['primeicons/primeicons.css', '~/assets/scss/main.scss'],
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss'
  ],
  primevue: {
    components: {
      include: ['Button', 'Sidebar']
    },
    importPT: { as: 'Mve', from: path.resolve(__dirname, './presets/Mve/') },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    options: {
      unstyled: true
    },
  },
  tailwindcss: {
    config: {
      content: [
        "presets/**/*.{js,vue,ts}"
      ],
      theme: {
        extend: {
          colors: {
            "orange-50":"rgb(var(--orange-50))",
            "orange-100":"rgb(var(--orange-100))",
            "orange-200":"rgb(var(--orange-200))",
            "orange-300":"rgb(var(--orange-300))",
            "orange-400":"rgb(var(--orange-400))",
            "orange-500":"rgb(var(--orange-500))",
            "orange-600":"rgb(var(--orange-600))",
            "orange-700":"rgb(var(--orange-700))",
            "orange-800":"rgb(var(--orange-800))",
            "orange-900":"rgb(var(--orange-900))",
            "primary-50": "rgb(var(--primary-50))",
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",
            "primary-950": "rgb(var(--primary-950))",
            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))"
          },
        },
      },
    }
  }
})