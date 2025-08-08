import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Gestor-de-citas/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify'
    }
  },
  define: {
    'process.env': {}
  }
})
