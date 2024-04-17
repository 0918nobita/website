import { type StyleRule } from '@vanilla-extract/css';

type Rule = NonNullable<StyleRule['@media']>[string];

export const whenHoverIsSupported = (rule: Rule) =>
  ({
    '@media': {
      '(hover: hover)': rule,
    },
  }) as const;

export const hover = (rule: Rule) =>
  ({
    '@media': {
      '(hover: hover)': {
        ':hover': rule,
      },
    },
  }) as const;
