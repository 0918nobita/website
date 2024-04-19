import type { Meta, StoryObj } from '@storybook/svelte';

import HistoryPageConfigDisplay from './HistoryPageConfigDisplay.svelte';

const meta = {
    title: 'HistoryPageConfigDisplay',
    component: HistoryPageConfigDisplay,
    argTypes: {
        aChecked: { control: { type: 'boolean' } },
        bChecked: { control: { type: 'boolean' } },
        cChecked: { control: { type: 'boolean' } },
    },
    args: {
        aChecked: false,
        bChecked: false,
        cChecked: false,
        onChangeA: () => {},
        onChangeB: () => {},
        onChangeC: () => {},
    },
    parameters: {
        controls: {
            exclude: ['onChangeA', 'onChangeB', 'onChangeC'],
        },
    },
} satisfies Meta<HistoryPageConfigDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
