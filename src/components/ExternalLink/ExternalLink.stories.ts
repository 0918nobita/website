import type { Meta, StoryObj } from '@storybook/sveltekit';

import ExternalLink from './ExternalLink.svelte';

const meta = {
    title: 'ExternalLink',
    component: ExternalLink,
    argTypes: {
        url: {
            control: { type: 'text' },
        },
        label: {
            control: { type: 'text' },
        },
    },
    args: {
        url: 'https://svelte.dev',
        label: 'Svelte',
    },
} satisfies Meta<typeof ExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
