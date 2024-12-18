import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/contact-form/',
  plugins: [react()],
  build: {
    assetsDir: ''
  }
})
