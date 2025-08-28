import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  build: {
    format: 'file',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [react()],
  server: {
    port: 3002,
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
})
