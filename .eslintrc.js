module.exports = {
    root: true,
    env: { browser: true, es6: true },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.json', './ssg/tsconfig.json'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-undef': 'off',
        'simple-import-sort/sort': 'error',
    },
    ignorePatterns: ['node_modules/', 'dist/', '*.js'],
};
