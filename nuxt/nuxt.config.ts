const path = require('path');


export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/x'
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../server/public/x')
    },
  }
})
