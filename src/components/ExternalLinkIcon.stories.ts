import type { Meta, StoryObj } from '@storybook/svelte';
import ExternalLinkIcon from './ExternalLinkIcon.svelte';

const meta = {
    title: 'ExternalLinkIcon',
    component: ExternalLinkIcon,
} satisfies Meta<ExternalLinkIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
