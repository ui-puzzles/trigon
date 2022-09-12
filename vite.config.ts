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
 * DOCS: https://vitejs.dev/config/
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
    // Whether to output css individually when compiling.
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'UIPuzzle',
      fileName: 'ui-puzzle',
      // @ts-ignore
      formats: ['esm', 'umd', 'iife'],
      // @ts-check
    },
  },
});
