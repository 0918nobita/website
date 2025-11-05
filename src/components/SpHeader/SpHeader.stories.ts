import type { Meta, StoryObj } from '@storybook/sveltekit';

import SpHeader from './SpHeader.svelte';

const meta = {
    title: 'SpHeader',
    component: SpHeader,
    args: {
        className: '',
    },
    parameters: {
        controls: {
            exclude: ['className'],
        },
    },
} satisfies Meta<typeof SpHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
