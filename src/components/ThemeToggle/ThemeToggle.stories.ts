import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeToggleDisplay from './ThemeToggleDisplay.svelte';

const meta = {
    title: 'ThemeToggleDisplay',
    component: ThemeToggleDisplay,
    argTypes: {
        currentTheme: {
            options: ['dark', 'light'],
            control: { type: 'select' },
        },
        themeSetting: {
            options: ['match-system', 'dark', 'light'],
            control: { type: 'select' },
        },
        onChange: {
            control: false,
        },
    },
} satisfies Meta<ThemeToggleDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentTheme: 'light',
        themeSetting: 'match-system',
        onChange: () => {},
    },
};
