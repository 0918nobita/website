import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeToggleSkeleton from './ThemeToggleSkeleton.svelte';

const meta = {
    title: 'ThemeToggleSkeleton',
    component: ThemeToggleSkeleton,
} satisfies Meta<ThemeToggleSkeleton>;

export default meta;

type Story = StoryObj<ThemeToggleSkeleton>;

export const Default: Story = {};
