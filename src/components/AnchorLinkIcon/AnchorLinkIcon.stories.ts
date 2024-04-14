import type { Meta, StoryObj } from '@storybook/svelte';

import AnchorLinkIcon from './AnchorLinkIcon.svelte';

const meta = {
    title: 'AnchorLinkIcon',
    component: AnchorLinkIcon,
    args: {
        className: '',
    },
    parameters: {
        controls: {
            exclude: ['className'],
        },
    },
} satisfies Meta<AnchorLinkIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
