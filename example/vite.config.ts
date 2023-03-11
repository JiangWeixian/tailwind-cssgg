import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import { VitePluginDocument } from 'vite-plugin-document'
import inspect from 'vite-plugin-inspect'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pages(), VitePluginDocument(), !!process.env.VITE_INSPECT && inspect()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
