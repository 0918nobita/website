import { componentLayer, hover } from '~/style/helper.css';
import { vars } from '~/style/theme.css';

export const container = componentLayer({
  display: 'flex',
  alignItems: 'center',
  height: '2rem',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: vars.sidebar.foreground,
  backgroundColor: vars.sidebar.background.default,
});

export const sunOrMoon = componentLayer({
  width: '2rem',
  height: '2rem',
  padding: '0.5rem',
  fill: vars.sidebar.foreground,
});

export const selector = componentLayer({
  flex: '1',
  height: '100%',
  border: 'none',
  fontSize: '0.95rem',
  padding: '0 0.5rem',

  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',

  backgroundColor: vars.sidebar.background.default,
  color: vars.sidebar.foreground,

  ...hover({
    backgroundColor: vars.sidebar.background.hovered,
  }),
});
