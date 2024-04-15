import { globalStyle } from '@vanilla-extract/css';

import {
  main,
  underline,
  heading,
  sidebar,
  spHeader,
  card,
} from './variable.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle(':root', {
  vars: {
    [main.background]: '#fcfcfc',
    [main.foreground]: '#535353',

    [heading.h2]: '#8a6498',
    [heading.h3]: '#535353',

    [underline]: '#b3b3b3',

    [sidebar.foreground]: '#535353',
    [sidebar.background.default]: '#f8e4ff',
    [sidebar.background.hovered]: '#e9d3f1',

    [spHeader.foreground]: '#535353',
    [spHeader.background.default]: '#f8e4ff',
    [spHeader.background.hovered]: '#e9d3f1',

    [card.background]: '#af9eaf6b',
    [card.border]: '2px solid #af9eaf6b',
    [card.boxShadow]: '0 2rem 2rem -2rem #d3d3d3',
  },
});

globalStyle(`:root[data-theme='dark']`, {
  vars: {
    [main.background]: '#363636',
    [main.foreground]: '#fcfcfc',

    [heading.h2]: '#caaed6',
    [heading.h3]: '#e4e4e4',

    [underline]: '#939393',

    [sidebar.foreground]: '#fcfcfc',
    [sidebar.background.default]: '#736279',
    [sidebar.background.hovered]: '#907999',

    [spHeader.foreground]: '#fcfcfc',
    [spHeader.background.default]: '#736279',
    [spHeader.background.hovered]: '#907999',

    [card.background]: '#7e707e6b',
    [card.border]: '2px solid #7e707e6b',
    [card.boxShadow]: '0 2rem 2rem -2rem rgb(10 10 10)',
  },
});

globalStyle('a', {
  color: 'inherit',
  textDecorationColor: underline,
});

globalStyle('body', {
  margin: '0',

  backgroundColor: main.background,
  color: main.foreground,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif, 'Segoe UI Emoji'`,
  fontSize: '17px',
  lineHeight: '30px',
});

globalStyle('h2', {
  color: heading.h2,
});

globalStyle('h3', {
  color: heading.h3,
});

globalStyle(`:root[data-theme='dark'] img`, {
  filter: 'grayscale(20%)',
});
