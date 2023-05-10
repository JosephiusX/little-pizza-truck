import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { splitVendorChunkPlugin } from 'vite';
import path from 'path';
// import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    react(),
    WindiCSS(),
    splitVendorChunkPlugin(),
    // reactRefresh()
  ],
  build: {
    rollupOptions: {
      input: './public/index.html',
    },
    sourcemap: true,
  },
  alias: {
    '~': path.resolve(__dirname, 'src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  server: {
    port: 3000,
    proxy: {
      '/auth': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/auth'),
      },
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          indentedSyntax: true
        }
      }
    },
  },
});