import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // three.js (~190 kB gzip) fica no chunk partilhado das cenas 3D, carregado sob demanda
    chunkSizeWarningLimit: 800,
  },
})
