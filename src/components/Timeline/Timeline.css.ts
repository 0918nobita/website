import { globalStyle } from '@vanilla-extract/css';

import { componentLayer, hover } from '~/style/helper.css';
import { vars } from '~/style/theme.css';

export const timeline = componentLayer({
  listStyleType: 'none',
  borderLeft: `2px solid ${vars.timeline.lineColor}`,
  padding: '10px 5px',
});

export const timelineItem = componentLayer({
  padding: '20px 20px',
  position: 'relative',
  ...hover({
    backgroundColor: vars.timeline.background.hovered,
  }),
});

globalStyle(`${timelineItem}::before`, {
  '@layer': {
    component: {
      position: 'absolute',
      content: '""',
      top: 'calc(22px + 0.5rem)',
      left: '-12px',
      width: '12px',
      height: '12px',
      backgroundColor: vars.timeline.dotColor,
      borderRadius: '50%',
    },
  },
});

export const marker = componentLayer({
  display: 'inline-block',
  padding: '2px 0.7rem',
  borderRadius: '10px',
  color: vars.timeline.marker.foreground,
  backgroundColor: vars.timeline.marker.background,
});

export const innerList = componentLayer({
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
  paddingTop: '0.5rem',
});

export const primary = componentLayer({
  fontSize: '1.3rem',
  fontWeight: '600',
});

export const secondary = componentLayer({
  fontSize: '1rem',
});

export const tertiary = componentLayer({
  fontSize: '0.9rem',
});
