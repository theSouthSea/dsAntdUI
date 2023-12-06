import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@":path.resolve(__dirname, 'src'),
      "@base":path.resolve(__dirname, 'src/components/base'), 
      "@ui":path.resolve(__dirname, 'src/components/base/exportLib'),
    },
  }
})
