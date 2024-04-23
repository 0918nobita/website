import { layoutLayer } from '~/style/helper.css';
import { notSp, sp } from '../style/responsive.css';

export const main = layoutLayer({
  display: 'flex',
  flexDirection: 'row',

  ...sp({
    flexDirection: 'column',
  }),
});

export const sidebar = layoutLayer({
  ...sp({
    display: 'none',
  }),
});

export const spHeader = layoutLayer({
  ...notSp({
    display: 'none',
  }),
});

export const articleWrapper = layoutLayer({
  flex: '1',
  height: '100vh',
  overflowY: 'auto',

  ...sp({
    height: 'fit-content',
    overflowY: 'visible',
  }),
});

export const article = layoutLayer({
  padding: '1rem 2rem 5rem 2rem',
  maxWidth: '970px',
  width: '100%',
  margin: '0 auto',

  ...sp({
    padding: '0 1rem 3rem 1rem',
  }),
});
