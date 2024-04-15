import { globalLayer, style, type StyleRule } from '@vanilla-extract/css';

export const base = globalLayer('base');

export const component = globalLayer('component');

export const layout = globalLayer('layout');

type Rule = Exclude<StyleRule['@layer'], undefined>[string];

export const componentLayer = (rule: Rule): string =>
  style({ '@layer': { [component]: rule } });

export const layoutLayer = (rule: Rule): string =>
  style({ '@layer': { [layout]: rule } });
