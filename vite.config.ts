import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/about', '/projects', '/projects/custodian', '/projects/whistleblower', '/projects/gamified-respiratory-exercises', '/projects/babbelbord'],
    }),
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
