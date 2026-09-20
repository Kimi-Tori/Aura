import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
     alias: {
       '@': path.resolve(__dirname, 'src'),
     },
   },
   plugins: [vue()],
   css: {
     preprocessorOptions: {
       scss: {
         additionalData: `@use "@/styles/variables" as *;`,
       },
     },
   },
   server: {
     port: 8080, // Измените на нужный вам порт
   },
   base: '/Aura/',
   build: {
     outDir: 'dist',
   },
})
