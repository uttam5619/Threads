import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    // get rid of the CORS error
    proxy:{
      '/api': {
        target: 'http://localhost:6050',
        changeOrigin: true,
        secure: false
      }
    }
  },
})
