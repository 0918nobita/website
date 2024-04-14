import { style } from '@vanilla-extract/css';

import { component } from '../../layer.css';

export const header = style({
  '@layer': {
    [component]: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '3rem',
      backgroundColor: 'var(--sidebar-bg)',
      color: 'var(--sidebar-text)',
    },
  },
});

export const iconWrapper = style({
  '@layer': {
    [component]: {
      height: '100%',
    },
  },
});

export const icon = style({
  '@layer': {
    [component]: {
      height: '100%',
      width: 'auto',
    },
  },
});

export const navItem = style({
  '@layer': {
    [component]: {
      display: 'grid',
      placeItems: 'center',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      textDecoration: 'none',

      '@media': {
        '(hover: hover)': {
          ':hover': {
            backgroundColor: 'var(--sidebar-hovered-bg)',
          },
        },
      },
    },
  },
});
