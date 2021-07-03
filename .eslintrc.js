module.exports = {
    root: true,
    env: { browser: true, es6: true, node: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    ignorePatterns: ['_next', 'out', 'public'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: ['plugin:@typescript-eslint/recommended', 'next'],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.json',
            },
            rules: {
                'no-undef': 'off',
                'react/prop-types': 'off',
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
    ],
};
