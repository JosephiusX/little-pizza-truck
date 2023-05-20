import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { splitVendorChunkPlugin } from 'vite';
import path from 'path';

export default defineConfig({
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  server: {
    port: 3000,
    proxy: {
      // With options
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/auth/google': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/auth/google/callback': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
    historyApiFallback: true,  // Add this line
  },
  plugins: [
    react(),
    WindiCSS(),
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      input: 'public/index.html',
    },
    sourcemap: true,
  },
  alias: {
    '~': path.resolve(__dirname, 'src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  css: {
    preprocessorOptions: {
      sass: {
        indentedSyntax: true
      }
    }
  },
});