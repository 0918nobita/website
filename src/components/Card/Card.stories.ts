import type { Meta, StoryObj } from '@storybook/svelte';

import Card from './Card.svelte';

const meta = {
    title: 'Card',
    component: Card,
} satisfies Meta<Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'タイトル',
        desc: '短めの説明文',
    },
};
