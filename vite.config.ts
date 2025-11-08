import path from 'node:path';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [sveltekit(), vanillaExtractPlugin({ identifiers: 'debug' })],
  resolve: {
    alias: {
      '~': path.join(import.meta.dirname, 'src'),
    },
  },
});
