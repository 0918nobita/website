import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/svelte-vite',
};
export default config;
