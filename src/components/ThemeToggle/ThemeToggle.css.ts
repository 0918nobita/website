import { componentLayer } from '~/layer.css';
import { sidebar } from '~/variable.css';

export const container = componentLayer({
  display: 'flex',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: sidebar.foreground,
});

export const sunOrMoon = componentLayer({
  width: '2rem',
  height: '2rem',
  padding: '0.5rem',
  fill: sidebar.foreground,
});

export const selector = componentLayer({
  flex: '1',
  padding: '0.5rem',
  border: 'none',

  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',

  backgroundColor: sidebar.background.default,
  color: sidebar.foreground,

  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: sidebar.background.hovered,
      },
    },
  },
});
