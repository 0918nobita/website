import { componentLayer } from '~/layer.css';
import { spHeader } from '~/variable.css';

export const header = componentLayer({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  height: '3rem',
  backgroundColor: spHeader.background.default,
  color: spHeader.foreground,
});

export const iconWrapper = componentLayer({
  height: '100%',
});

export const icon = componentLayer({
  height: '100%',
  width: 'auto',
});

export const navItem = componentLayer({
  display: 'grid',
  placeItems: 'center',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  textDecoration: 'none',

  '@media': {
    '(hover: hover)': {
      ':hover': {
        backgroundColor: spHeader.background.hovered,
      },
    },
  },
});
