import { globalStyle } from '@vanilla-extract/css';

import { component, componentLayer } from '~/layer.css';

export const breadcrumb = componentLayer({
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  padding: '0',
});

globalStyle(`${breadcrumb} li:not(:last-of-type)::after`, {
  '@layer': {
    [component]: {
      content: '">"',
      margin: '0 0.6rem',
    },
  },
});
