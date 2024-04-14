import { globalStyle, style } from '@vanilla-extract/css';

import { layout } from '../layer.css';

export const main = style({
  '@layer': {
    [layout]: {
      display: 'flex',
      flexDirection: 'row',

      '@media': {
        '(max-width: 750px)': {
          flexDirection: 'column',
        },
      },
    },
  },
});

export const sidebar = style({
  '@layer': {
    [layout]: {
      '@media': {
        '(max-width: 750px)': {
          display: 'none',
        },
      },
    },
  },
});

export const spHeader = style({
  '@layer': {
    [layout]: {
      display: 'none',

      '@media': {
        '(max-width: 750px)': {
          display: 'flex',
        },
      },
    },
  },
});

export const articleWrapper = style({
  '@layer': {
    [layout]: {
      flex: '1',
      height: '100vh',
      overflowY: 'auto',

      '@media': {
        '(max-width: 750px)': {
          height: 'fit-content',
          overflowY: 'visible',
        },
      },
    },
  },
});

export const article = style({
  '@layer': {
    [layout]: {
      padding: '1rem 2rem 5rem 2rem',
      maxWidth: '970px',
      width: '100%',
      margin: '0 auto',

      '@media': {
        '(max-width: 750px)': {
          padding: '0 1rem 3rem 1rem',
        },
      },
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
