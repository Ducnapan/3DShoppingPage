import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const baseUrl = env.VITE_APP_BASE_URL

  return {
    plugins: [react()],
    base: baseUrl,
  }
})
