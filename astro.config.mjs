import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://kodai.engineer',
    integrations: [svelte(), mdx()],
    vite: {
        plugins: [vanillaExtractPlugin()],
    },
});
