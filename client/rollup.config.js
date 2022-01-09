import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { spawn } from 'child_process';
import css from 'rollup-plugin-css-only';
import livereload from 'rollup-plugin-livereload';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const sveltePlugin = svelte({
    preprocess: sveltePreprocess({ sourceMap: !production }),
    compilerOptions: {
        dev: !production, // enable run-time checks when not in production
    },
});

// we'll extract any component CSS out into a separate file - better for performance
const cssPlugin = css({ output: 'bundle.css' });

// If you have external dependencies installed from npm, you'll most likely need these plugins.
// In some cases you'll need additional configuration - consult the documentation for details:
// https://github.com/rollup/plugins/tree/master/packages/commonjs
const resolvePlugin = resolve({
    browser: true,
    dedupe: ['svelte'],
});

const baseConfig = {
    plugins: [
        sveltePlugin,
        cssPlugin,
        resolvePlugin,
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production,
        }),

        // Watch the `public` directory and refresh the browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (pnpm build instead of pnpm dev), minify
        production && terser(),
    ],
    watch: {
        clearScreen: false,
    },
};

if (!production) {
    const server = spawn('pnpm', ['start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
    });

    const toExit = () => server.kill(0);
    process.on('SIGTERM', toExit);
    process.on('exit', toExit);
}

export default [
    {
        ...baseConfig,
        input: 'src/main.ts',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/build/bundle.js',
        },
    },
];
