import type { Meta, StoryObj } from '@storybook/sveltekit';

import Sidebar from './Sidebar.svelte';

const meta = {
    title: 'Sidebar',
    component: Sidebar,
    args: {
        className: '',
    },
    parameters: {
        controls: {
            exclude: ['className'],
        },
    },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
