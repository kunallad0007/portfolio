import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Required for deployment on Vercel or Netlify
  plugins: [react()],
});
