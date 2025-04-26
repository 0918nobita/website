import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeToggleSkeleton from './ThemeToggleSkeleton.svelte';

const meta = {
    title: 'ThemeToggleSkeleton',
    component: ThemeToggleSkeleton,
} satisfies Meta<typeof ThemeToggleSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
