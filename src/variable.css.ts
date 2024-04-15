import { createVar } from '@vanilla-extract/css';

export const main = {
  background: createVar(),
  foreground: createVar(),
};

export const heading = {
  h2: createVar(),
  h3: createVar(),
};

export const underline = createVar();

export const sidebar = {
  foreground: createVar(),
  background: {
    default: createVar(),
    hovered: createVar(),
  },
};

export const spHeader = {
  foreground: createVar(),
  background: {
    default: createVar(),
    hovered: createVar(),
  },
};

export const card = {
  background: createVar(),
  border: createVar(),
  boxShadow: createVar(),
};
