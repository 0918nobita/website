import type { Preview } from '@storybook/sveltekit';
import { withThemeByClassName } from '@storybook/addon-themes';

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
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
