module.exports = {
    root: true,
    env: { browser: true, es6: true, node: true },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['simple-import-sort'],
    rules: {
        'simple-import-sort/imports': 'error',
    },
    ignorePatterns: ['node_modules', '_next', 'out', 'public'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
                'plugin:react/recommended',
            ],
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
