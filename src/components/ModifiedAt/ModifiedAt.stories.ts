import type { Meta, StoryObj } from '@storybook/sveltekit';

import ModifiedAt from './ModifiedAt.svelte';

const meta = {
  title: 'ModifiedAt',
  component: ModifiedAt,
  argTypes: {
    date: {
      control: { type: 'date' },
    },
  },
} satisfies Meta<typeof ModifiedAt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(),
  },
};
