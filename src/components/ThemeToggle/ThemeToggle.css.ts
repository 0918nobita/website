import { hover } from '~/helper.css';
import { componentLayer } from '~/layer.css';
import { vars } from '~/theme.css';

export const container = componentLayer({
  display: 'flex',
  alignItems: 'center',
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
  border: 'none',
  fontSize: '0.95rem',
  padding: '0.5rem',

  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',

  backgroundColor: vars.sidebar.background.default,
  color: vars.sidebar.foreground,

  ...hover({
    backgroundColor: vars.sidebar.background.hovered,
  }),
});
