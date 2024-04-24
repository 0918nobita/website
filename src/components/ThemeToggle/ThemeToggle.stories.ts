import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeToggle from './ThemeToggle.svelte';

const meta = {
    title: 'ThemeToggle',
    component: ThemeToggle,
    argTypes: {
        currentlyAppliedTheme: {
            control: { type: 'select' },
            options: ['dark', 'light'],
        },
        themeSetting: {
            control: { type: 'select' },
            options: ['dark', 'light', 'match-system'],
        },
    },
    args: {
        currentlyAppliedTheme: 'light',
        themeSetting: 'match-system',
    },
    parameters: {
        controls: {
            exclude: ['onChange'],
        },
    },
} satisfies Meta<ThemeToggle>;

export default meta;

type Story = StoryObj<ThemeToggle>;

export const Default: Story = {};
