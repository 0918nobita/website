import { style } from '@vanilla-extract/css';

import { component } from '../../layer.css';

export const nav = style({
  '@layer': {
    [component]: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'var(--sidebar-bg)',
      color: 'var(--sidebar-text)',
      width: '18rem',
      height: '100vh',
    },
  },
});

export const icon = style({
  '@layer': {
    [component]: {
      maxWidth: '100%',
      height: 'auto',
      padding: '1rem',
    },
  },
});

export const navList = style({
  '@layer': {
    [component]: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
    },
  },
});

export const navItem = style({
  '@layer': {
    [component]: {
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

export const navItemLink = style({
  '@layer': {
    [component]: {
      display: 'block',
      padding: '0.5rem 1rem',
      textDecoration: 'none',
    },
  },
});

export const spacer = style({
  '@layer': {
    [component]: {
      flexGrow: 1,
    },
  },
});
