import {
  globalLayer,
  globalStyle,
  style,
  type GlobalStyleRule,
  type StyleRule,
} from '@vanilla-extract/css';

export const base = globalLayer('base');

export const component = globalLayer('component');

export const layout = globalLayer('layout');

type GlobalStyleRuleWithoutLayer = NonNullable<
  GlobalStyleRule['@layer']
>[string];

export const baseLayerGlobalStyle = (
  selector: string,
  rule: GlobalStyleRuleWithoutLayer,
): void => {
  globalStyle(selector, {
    '@layer': {
      [base]: rule,
    },
  });
};

type StyleRuleWithoutLayer = NonNullable<StyleRule['@layer']>[string];

export const componentLayer = (rule: StyleRuleWithoutLayer): string =>
  style({ '@layer': { [component]: rule } });

export const layoutLayer = (rule: StyleRuleWithoutLayer): string =>
  style({ '@layer': { [layout]: rule } });
