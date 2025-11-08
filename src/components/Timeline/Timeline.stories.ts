import type { Meta, StoryObj } from '@storybook/sveltekit';

import Timeline from './Timeline.svelte';

const meta = {
  title: 'Timeline',
  component: Timeline,
  argTypes: {
    contents: { control: { type: 'object' } },
  },
  args: {
    contents: [
      {
        marker: '2024年',
        items: [
          {
            type: 'tertiary',
            text: 'Gleam 言語に入門した',
          },
          {
            type: 'tertiary',
            text: 'HSK２級に合格した',
          },
        ],
      },
      {
        marker: '2023年',
        items: [
          {
            type: 'primary',
            text: 'gRPC・GraphQL の両方を用いたサンプルを作成した',
          },
          {
            type: 'secondary',
            text: 'Obsidian プラグインを自作して公開した',
          },
          {
            type: 'secondary',
            text: 'YouTube ライブのチャットを VOICEVOX で読み上げるツールを Rust で自作・運用した',
          },
          {
            type: 'tertiary',
            text: '中国語を独学で学び始めた',
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
