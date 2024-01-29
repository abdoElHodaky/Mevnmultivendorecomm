import path from 'path';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      serverUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8400' : 'https://big-deals.vercel.app'
    }
  },
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
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    'nuxt-swiper'
  ],
  imports: {
    dirs: ['lib']
  },
  primevue: {
    components: {
      include: ['Button', 'Sidebar', 'Toast']
    },
    importPT: { as: 'Bd', from: path.resolve(__dirname, './presets/Bd/') },
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
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
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