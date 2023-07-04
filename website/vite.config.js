import { defineConfig } from 'vite';
import postcss from 'rollup-plugin-postcss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        postcss({
            extract: true,
            minimize: true
        })
    ],
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