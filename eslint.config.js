import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';

const tsRules = {
    ...ts.configs['strict-type-checked'].rules,
    ...ts.configs['stylistic-type-checked'].rules,

    '@typescript-eslint/array-type': [
        'error',
        {
            default: 'array-simple',
            readonly: 'array-simple',
        },
    ],
};

/** @type {import('typescript-eslint').Config} */
export default [
    js.configs.recommended,

    {
        ignores: ['dist', '.svelte-kit'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    },

    {
        ignores: ['.prettierrc.mjs', '*.config.{js,mjs}'],
        plugins: {
            '@typescript-eslint': ts,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                parser: tsParser,
                extraFileExtensions: ['.svelte'],
            },
        },
        rules: tsRules,
    },

    {
        files: ['**/*.svelte'],
        plugins: {
            svelte,
        },
        processor: svelte.processors.svelte,
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                project: './tsconfig.json',
                parser: tsParser,
                extraFileExtensions: ['.svelte'],
            },
        },
        rules: {
            ...svelte.configs.base.rules,
            ...svelte.configs.recommended.rules,
        },
    },
];
