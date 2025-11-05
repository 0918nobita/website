import type { Meta, StoryObj } from '@storybook/sveltekit';

import Breadcrumb from './Breadcrumb.svelte';

const meta = {
    title: 'Breadcrumb',
    component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        path: [
            { label: 'ページ1', link: '#' },
            { label: 'ページ2', link: '#' },
        ],
    },
};
