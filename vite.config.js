import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    // server: {
    //     proxy: {
    //         '/api': 'http://127.0.0.1:8000',
    //         '/storage': 'http://127.0.0.1:8000/storage',
    //     }
    // },
  plugins: [
      react(),
      tailwindcss()

  ],
    define: {
        'process.env': {
            REACT_APP_API_URL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
        }
    }
})
