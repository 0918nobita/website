import type { Meta, StoryObj } from '@storybook/svelte';

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
} satisfies Meta<Sidebar>;

export default meta;

type Story = StoryObj<Sidebar>;

export const Default: Story = {};
