import { componentLayer } from '~/layer.css';
import { vars } from '~/theme.css';

export const clickableCard = componentLayer({
  textDecoration: 'none',

  display: 'grid',
  gridTemplateRows: 'subgrid',
  gridRow: 'span 2',
  gap: '0',
  borderRadius: '7px',
  border: vars.card.border,
  boxShadow: vars.card.boxShadow,
  fontSize: '15px',
  lineHeight: '1.5',
});

export const nonClickableCard = componentLayer({
  display: 'grid',
  gridTemplateRows: 'subgrid',
  gridRow: 'span 2',
  gap: '0',
  borderRadius: '7px',
  border: vars.card.border,
  boxShadow: vars.card.boxShadow,
  fontSize: '15px',
  lineHeight: '1.5',
});

export const titleWrapper = componentLayer({
  display: 'grid',
  alignItems: 'center',
  margin: '0',
  padding: '0.5rem 0.7rem',

  backgroundColor: vars.card.background,
});

export const title = componentLayer({
  margin: '0',
});

export const desc = componentLayer({
  margin: '0',
  padding: '0.5rem 0.7rem',
});