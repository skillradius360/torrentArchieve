import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server:{
    proxy:{
      "/game":"http://localhost:8000/"
    }
  }
})