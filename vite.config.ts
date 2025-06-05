import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { htmlPrerender } from 'vite-plugin-html-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/'],
      selector: '#root'
    })
  ]
})
