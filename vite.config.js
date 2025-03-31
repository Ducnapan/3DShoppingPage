import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3DShoppingPage/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        fallback: '404.html',
      },
    },
  },
});