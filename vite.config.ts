import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/slider': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
      '/products': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
      '/products/*': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
    },
  },
})
