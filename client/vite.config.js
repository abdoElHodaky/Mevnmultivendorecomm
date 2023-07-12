import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4200
  },
  plugins: [vue()],
  base: '/store/',
  build: {
    outDir: '../server/public/store',
    emptyOutDir: true
  }
});