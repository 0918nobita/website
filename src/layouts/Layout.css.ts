import { globalStyle } from '@vanilla-extract/css';

import { layoutLayer, layout } from '../layer.css';

export const main = layoutLayer({
  display: 'flex',
  flexDirection: 'row',

  '@media': {
    '(max-width: 750px)': {
      flexDirection: 'column',
    },
  },
});

export const sidebar = layoutLayer({
  '@media': {
    '(max-width: 750px)': {
      display: 'none',
    },
  },
});

export const spHeader = layoutLayer({
  display: 'none',

  '@media': {
    '(max-width: 750px)': {
      display: 'flex',
    },
  },
});

export const articleWrapper = layoutLayer({
  flex: '1',
  height: '100vh',
  overflowY: 'auto',

  '@media': {
    '(max-width: 750px)': {
      height: 'fit-content',
      overflowY: 'visible',
    },
  },
});

export const article = layoutLayer({
  padding: '1rem 2rem 5rem 2rem',
  maxWidth: '970px',
  width: '100%',
  margin: '0 auto',

  '@media': {
    '(max-width: 750px)': {
      padding: '0 1rem 3rem 1rem',
    },
  },
});

globalStyle(`${article} ul`, {
  '@layer': {
    [layout]: {
      '@media': {
        '(max-width: 750px)': {
          paddingLeft: '20px',
        },
      },
    },
  },
});
