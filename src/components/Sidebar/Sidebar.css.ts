import { componentLayer } from '~/layer.css';
import { sidebar } from '~/variable.css';

export const nav = componentLayer({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: sidebar.background.default,
  color: sidebar.foreground,
  width: '18rem',
  height: '100vh',
});

export const icon = componentLayer({
  maxWidth: '100%',
  height: 'auto',
  padding: '1rem',
});

export const navList = componentLayer({
  listStyleType: 'none',
  margin: '0',
  padding: '0',
});

export const navItem = componentLayer({
  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: sidebar.background.hovered,
      },
    },
  },
});

export const navItemLink = componentLayer({
  display: 'block',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
});

export const spacer = componentLayer({
  flexGrow: 1,
});
