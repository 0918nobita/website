import { globalStyle } from '@vanilla-extract/css';

import { component, componentLayer } from '~/layer.css';

export const breadcrumb = componentLayer({
  display: 'flex',
  flexWrap: 'wrap',
  listStyleType: 'none',
  padding: '0',
  margin: '0.5rem 0',

  fontSize: '0.9rem',
});

globalStyle(`${breadcrumb} li:not(:last-of-type)::after`, {
  '@layer': {
    [component]: {
      content: '">"',
      margin: '0 0.6rem',
    },
  },
});
