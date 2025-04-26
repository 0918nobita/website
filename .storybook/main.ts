import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.ts'],
    addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
    framework: '@storybook/sveltekit',
};

export default config;
