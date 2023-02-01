import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      'view': path.resolve(__dirname, "src/view"),
      'components': path.resolve(__dirname, "src/components"),
      'assets': path.resolve(__dirname, "src/assets"),
    }
  },
  server:{
    host:"0.0.0.0",
    hmr:true,
    watch: { usePolling: true }
  }
})
