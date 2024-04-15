import { componentLayer } from '~/layer.css';
import { vars } from '~/theme.css';

export const container = componentLayer({
  display: 'flex',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: vars.sidebar.foreground,
});

export const sunOrMoon = componentLayer({
  width: '2rem',
  height: '2rem',
  padding: '0.5rem',
  fill: vars.sidebar.foreground,
});

export const selector = componentLayer({
  flex: '1',
  padding: '0.5rem',
  border: 'none',

  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',

  backgroundColor: vars.sidebar.background.default,
  color: vars.sidebar.foreground,

  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: vars.sidebar.background.hovered,
      },
    },
  },
});
