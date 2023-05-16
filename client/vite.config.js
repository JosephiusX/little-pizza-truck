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
  server: {
    port: 3000
  },
  plugins: [
    react(),
    WindiCSS(),
    splitVendorChunkPlugin(),
    // reactRefresh()
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
  },
);