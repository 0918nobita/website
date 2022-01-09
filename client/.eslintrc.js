module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    ignorePatterns: ['node_modules', 'public'],
    overrides: [
        {
            files: ['*.ts', '*.svelte'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: './tsconfig.json',
                extraFileExtensions: ['.svelte'],
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
            plugins: ['svelte3', '@typescript-eslint'],
        },
    ],
    settings: {
        'svelte3/typescript': true,
    },
};
