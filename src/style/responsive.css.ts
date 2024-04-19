import type { StyleRule } from '@vanilla-extract/css';

type StyleRuleWithoutMedia = NonNullable<StyleRule['@media']>[string];

export const sp = (rule: StyleRuleWithoutMedia) =>
  ({
    '@media': {
      '(max-width: 750px)': rule,
    },
  }) as const;

export const notSp = (rule: StyleRuleWithoutMedia) =>
  ({
    '@media': {
      'not (max-width: 750px)': rule,
    },
  }) as const;
