import type { Meta, StoryObj } from '@storybook/svelte';

import Card from './Card.svelte';

const meta = {
    title: 'Card',
    component: Card,
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        desc: {
            control: { type: 'text' },
        },
    },
    parameters: {
        controls: {
            exclude: ['link'],
        },
    },
} satisfies Meta<Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'タイトル',
        desc: '短めの説明文',
    },
};
