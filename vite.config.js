import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/posts': "http://localhost:3000" ,
      '/register': "http://localhost:3000" ,
      '/login': "http://localhost:3000",
      '/users': "http://localhost:3000",  // THIS IS BACKEND'S URL,  THE FRONTEND'S URL IS FROM http://localhost:5173
      '/users/:id': "http://localhost:3000",
      '/forgotPassword' : "http://localhost:3000",
      '/codigo-contrasena': "http://localhost:3000",
      '/reset_password' : "http://localhost:3000",
    }
  },
  plugins: [react()]
})
