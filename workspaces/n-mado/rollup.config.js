import elm from 'rollup-plugin-elm';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const devServerConfig = {
    open: true,
    openPage: '/',
    verbose: true,
    contentBase: 'dist',
    host: 'localhost',
    port: 1234,
    historyApiFallback: '/404.html',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

export default {
    input: 'src/bootstrap.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    },
    plugins: [
        elm({
            exclude: 'elm_stuff/**',
            compiler: { optimize: production, debug: false },
        }),
        production && terser(),
        !production && serve(devServerConfig),
    ],
};
