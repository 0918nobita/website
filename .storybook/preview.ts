import type { Preview } from '@storybook/svelte';

import '../src/style/global.css';
import { dark, light } from '../src/style/theme.css';

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: dark,
      lightClass: light,
      stylePreview: true,
    },
  },
};

export default preview;
