import type { Preview } from '@storybook/svelte';

import '../src/global.css';
import { dark, light } from '../src/theme.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        darkMode: {
            darkClass: dark,
            lightClass: light,
            stylePreview: true,
        },
    },
};

export default preview;
