import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

/**
 * NOTE: docs - https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // UnoCSS
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'TrigonUI',
      fileName: 'trigon-ui',
      // @ts-ignore
      formats: ['esm', 'umd', 'iife'],
      // @ts-check
    },
  },
});
