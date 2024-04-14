import eslint from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import astroParser from 'astro-eslint-parser';

/** @type {import('typescript-eslint').Config} */
export default [
    {
        ignores: ['dist', '.astro/*'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    },

    ...astro.configs['flat/all'],
    ...astro.configs['flat/jsx-a11y-strict'],

    {
        files: ['**/*.astro'],
        plugins: {
            '@typescript-eslint': ts,
            astro,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                project: './tsconfig.json',
                parser: tsParser,
                extraFileExtensions: ['.astro'],
                sourceType: 'module',
            },
        },
        rules: {
            ...ts.configs['strict-type-checked'].rules,
            ...ts.configs['stylistic-type-checked'].rules,
        },
    },

    {
        ignores: ['**/*.astro', '.prettierrc.mjs', '*.config.{js,mjs}'],
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
        rules: {
            ...ts.configs['strict-type-checked'].rules,
            ...ts.configs['stylistic-type-checked'].rules,
        },
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
