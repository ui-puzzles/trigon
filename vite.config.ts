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
    minify: 'terser', // options: boolean | 'terser' | 'esbuild'
    sourcemap: true,
    brotliSize: true, // generate report for compressing size
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
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // support tsx component，it is critical
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
