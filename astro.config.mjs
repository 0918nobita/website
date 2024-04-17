import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://kodai.engineer',
    integrations: [svelte(), mdx(), sitemap()],
    vite: {
        plugins: [
            vanillaExtractPlugin({
                identifiers: 'debug',
            }),
        ],
    },
});
