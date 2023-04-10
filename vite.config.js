import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/posts': "https://serverbackend-br77.onrender.com" ,
      '/register': "https://serverbackend-br77.onrender.com" ,
      '/login': "https://serverbackend-br77.onrender.com",
      '/users': "https://serverbackend-br77.onrender.com",
      '/users/:id': "https://serverbackend-br77.onrender.com",
      '/forgotPassword' : "https://serverbackend-br77.onrender.com",
      '/codigo-contrasena': "https://serverbackend-br77.onrender.com",
      '/reset_password' : "https://serverbackend-br77.onrender.com",
    }
  },
  plugins: [react()]
})
