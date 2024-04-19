import type { Meta, StoryObj } from '@storybook/svelte';

import ModifiedAt from './ModifiedAt.svelte';

const meta = {
    title: 'ModifiedAt',
    component: ModifiedAt,
    argTypes: {
        date: {
            control: { type: 'date' },
        },
    },
} satisfies Meta<ModifiedAt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        date: new Date(),
    },
};
