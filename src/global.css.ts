import { baseLayerGlobalStyle } from '~/layer.css';
import { vars, dark } from './theme.css';

baseLayerGlobalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

baseLayerGlobalStyle('a', {
  color: 'inherit',
  textDecorationColor: vars.underline,
});

baseLayerGlobalStyle('body', {
  margin: '0',

  backgroundColor: vars.main.background,
  color: vars.main.foreground,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif, 'Segoe UI Emoji'`,
  fontSize: '17px',
  lineHeight: '30px',
});

baseLayerGlobalStyle('h2', {
  color: vars.heading.h2,
});

baseLayerGlobalStyle('h3', {
  color: vars.heading.h3,
});

baseLayerGlobalStyle(`${dark} img`, {
  filter: 'grayscale(20%)',
});
