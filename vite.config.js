import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: 'docs',
    target: 'es2017',
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    modulePreload: false,
  },
});
