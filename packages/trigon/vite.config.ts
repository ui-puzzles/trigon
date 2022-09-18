import { defineConfig, Plugin, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Unocss from './config/unocss';

interface RollupOptionsPartial {
  external: string[];
  output: {
    globals: {
      vue: string;
    };
    exports: 'named' | 'default' | 'none' | 'auto';
  };
}

const rollupOptions: RollupOptionsPartial = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
  },
};

/**
 * DOCS: https://vitejs.dev/config/
 */
export const config = {
  plugins: [
    vue() as Plugin,
    vueJsx() as Plugin,
    // UnoCSS
    Unocss() as Plugin[],
  ],
  build: {
    rollupOptions,
    minify: 'terser', // options: boolean | 'terser' | 'esbuild'
    sourcemap: true,
    brotliSize: true, // generate report for compressing size
    // Whether to output css individually when compiling.
    lib: {
      entry: './src/entry.ts',
      name: 'TrigonUI',
      fileName: '@ui-puzzles/trigon',
      formats: ['esm', 'umd', 'iife'],
    },
    cssCodeSplit: true,
    outDir: './dist',
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    // environment: 'happy-dom',
    environment: 'jsdom',
    // support tsx component，it is critical
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
  },
};

export default defineConfig(config as UserConfig);
