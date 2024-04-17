import { hover } from '~/helper.css';
import { componentLayer } from '~/layer.css';
import { vars } from '~/theme.css';

export const nav = componentLayer({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.sidebar.background.default,
  color: vars.sidebar.foreground,
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
  ...hover({
    backgroundColor: vars.sidebar.background.hovered,
  }),
});

export const navItemLink = componentLayer({
  display: 'block',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
});

export const spacer = componentLayer({
  flexGrow: 1,
});
