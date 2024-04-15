import { globalStyle } from '@vanilla-extract/css';

import { vars, dark } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  color: 'inherit',
  textDecorationColor: vars.underline,
});

globalStyle('body', {
  margin: '0',

  backgroundColor: vars.main.background,
  color: vars.main.foreground,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif, 'Segoe UI Emoji'`,
  fontSize: '17px',
  lineHeight: '30px',
});

globalStyle('h2', {
  color: vars.heading.h2,
});

globalStyle('h3', {
  color: vars.heading.h3,
});

globalStyle(`${dark} img`, {
  filter: 'grayscale(20%)',
});
