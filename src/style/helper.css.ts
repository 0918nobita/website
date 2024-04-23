import {
  globalStyle,
  style,
  type GlobalStyleRule,
  type StyleRule,
} from '@vanilla-extract/css';

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

type GlobalStyleRuleWithoutLayer = NonNullable<
  GlobalStyleRule['@layer']
>[string];

export const baseLayerGlobalStyle = (
  selector: string,
  rule: GlobalStyleRuleWithoutLayer,
): void => {
  globalStyle(selector, {
    '@layer': {
      base: rule,
    },
  });
};

type StyleRuleWithoutLayer = NonNullable<StyleRule['@layer']>[string];

export const componentLayer = (rule: StyleRuleWithoutLayer): string =>
  style({ '@layer': { component: rule } });

export const layoutLayer = (rule: StyleRuleWithoutLayer): string =>
  style({ '@layer': { layout: rule } });
