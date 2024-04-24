import { keyframes } from '@vanilla-extract/css';

import { componentLayer } from '~/style/helper.css';
import { vars } from '~/style/theme.css';

const skeletonAnimation = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const skeleton = componentLayer({
  position: 'relative',
  height: '2rem',
  overflow: 'hidden',
  borderTopWidth: '1px',
  borderTopStyle: 'solid',
  borderTopColor: vars.themeToggle.borderColor,
  backgroundColor: vars.themeToggle.background,

  '::before': {
    position: 'absolute',
    content: '""',
    display: 'block',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgb(255 255 255 / .3), transparent)',
    animation: `${skeletonAnimation} 1s linear infinite`,
  },
});
