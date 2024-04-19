import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.svx'],
    preprocess: [vitePreprocess(), mdsvex()],
    kit: {
        adapter: adapter({
            pages: 'dist',
        }),
        alias: {
            '~/*': 'src',
        },
    },
};
