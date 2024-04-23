import type { Meta, StoryObj } from '@storybook/svelte';

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
} satisfies Meta<SpHeader>;

export default meta;

type Story = StoryObj<SpHeader>;

export const Default: Story = {};
