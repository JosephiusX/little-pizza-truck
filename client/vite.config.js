import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import ImageMin from 'vite-plugin-imagemin';
import Visualizer from 'rollup-plugin-visualizer'; // Make sure you have this line

export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    ImageMin(),
  ],
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



// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     port: 3000 // listen on port 3000
//   },
//   proxy: {
//     '/api': {
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//       rewrite: path => path.replace(/^\/api/, '')
//     }
//   },
//   plugins: [
//     react(),
//   ],
  
// })


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });