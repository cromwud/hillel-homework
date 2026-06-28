import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    
    alias: {
      'react/jsx-dev-runtime': path.resolve(__dirname, './node_modules/react/jsx-dev-runtime.js'),
      'react': path.resolve(__dirname, './node_modules/react/index.js'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom/index.js'),
    },
    server: {
      deps: {
        inline: ['react', 'react-dom']
      }
    }
  },
})