import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    base: '/website/',
    build: {
        outDir: '../server/public/website',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: './main.js'
        },
    }
});