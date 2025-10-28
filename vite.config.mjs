// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

const managementPort = 5185;

export default {
  base: '/management/',

  server: {
    port: managementPort,
    strictPort: true,
    host: 'localhost',
    
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/management/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/management\/api/, '/api')
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  optimizeDeps: {
    noDiscovery: true
  },

  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()]
    })
  ],

  build: {
    // При сборке тоже применяется base: /management/
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: '/src/main.js'  // Или ваш entry point
    }
  }
};
