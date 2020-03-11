import resolve from '@rollup/plugin-node-resolve';
import jscc from 'rollup-plugin-jscc';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { createHash } from 'crypto';

const production = !process.env.ROLLUP_WATCH;

const inputBase = {
    main: './src/main.ts',
};

const outputBase = {
    dir: './dist',
};

const sha256 = createHash('sha256');
sha256.update(new Date().toString());

const buildHash = sha256.digest('hex');

const plugins = [
    resolve(),
    replace({
        BUILD_HASH: buildHash,
    }),
    // minify only in production
    production && terser(),
];

export default [
    // for modern browsers
    {
        input: Object.assign({}, inputBase, {
            serviceWorker: './src/serviceWorker.ts',
        }),
        output: Object.assign({}, outputBase, {
            format: 'es',
            entryFileNames: '[name].js',
        }),
        plugins: [
            ...plugins,
            typescript({
                tsconfig: 'tsconfig.json',
                tsconfigOverride: {
                    compilerOptions: {
                        target: 'esnext',
                    },
                },
            }),
            jscc(),
        ],
    },
    // for legacy browsers
    {
        input: inputBase,
        output: Object.assign({}, outputBase, {
            format: 'cjs',
            entryFileNames: 'legacy-[name].js',
        }),
        plugins: [
            ...plugins,
            typescript({
                tsconfig: 'tsconfig.json',
                tsconfigOverride: {
                    compilerOptions: {
                        target: 'es5',
                    },
                },
            }),
            jscc({
                values: {
                    _LEGACY: true,
                },
            }),
        ],
    },
];
