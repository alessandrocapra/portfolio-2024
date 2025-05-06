import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    reactRouter(),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      jpeg: {
        quality: 80
      },
      jpg: {
        quality: 80
      },
      webp: {
        quality: 80,
        lossless: true
      },
      avif: {
        quality: 80
      },
      gif: {
        effort: 7
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                removeEmptyAttrs: false
              }
            }
          }
        ]
      }
    })
  ]
})
