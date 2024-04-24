import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  main: {
    background: null,
    foreground: null,
  },
  heading: {
    h2: null,
    h3: null,
  },
  underline: null,
  sidebar: {
    foreground: null,
    background: {
      default: null,
      hovered: null,
    },
  },
  themeToggle: {
    background: null,
    borderColor: null,
  },
  spHeader: {
    foreground: null,
    background: {
      default: null,
      hovered: null,
    },
  },
  card: {
    background: null,
    border: null,
    boxShadow: null,
  },
  timeline: {
    lineColor: null,
    dotColor: null,
    background: {
      hovered: null,
    },
    marker: {
      foreground: null,
      background: null,
    },
  },
});

export const light = 'light';

createGlobalTheme(`.${light}`, vars, {
  main: {
    background: '#fcfcfc',
    foreground: '#535353',
  },
  heading: {
    h2: '#8a6498',
    h3: '#535353',
  },
  underline: '#b3b3b3',
  sidebar: {
    foreground: '#535353',
    background: {
      default: '#f8e4ff',
      hovered: '#e9d3f1',
    },
  },
  themeToggle: {
    background: '#f8e4ff',
    borderColor: '#535353',
  },
  spHeader: {
    foreground: '#fcfcfc',
    background: {
      default: '#736279',
      hovered: '#907999',
    },
  },
  card: {
    background: '#af9eaf6b',
    border: '2px solid #af9eaf6b',
    boxShadow: '0 2rem 2rem -2rem #d3d3d3',
  },
  timeline: {
    lineColor: '#736279',
    dotColor: '#907999',
    background: {
      hovered: '#e9e9e9',
    },
    marker: {
      foreground: '#fcfcfc',
      background: '#806e8c',
    },
  },
});

export const dark = 'dark';

createGlobalTheme(`.${dark}`, vars, {
  main: {
    background: '#363636',
    foreground: '#fcfcfc',
  },
  heading: {
    h2: '#caaed6',
    h3: '#e4e4e4',
  },
  underline: '#939393',
  sidebar: {
    foreground: '#fcfcfc',
    background: {
      default: '#736279',
      hovered: '#907999',
    },
  },
  themeToggle: {
    background: '#736279',
    borderColor: '#fcfcfc',
  },
  spHeader: {
    foreground: '#fcfcfc',
    background: {
      default: '#736279',
      hovered: '#907999',
    },
  },
  card: {
    background: '#7e707e6b',
    border: '2px solid #7e707e6b',
    boxShadow: '0 2rem 2rem -2rem rgb(10 10 10)',
  },
  timeline: {
    lineColor: '#736279',
    dotColor: '#907999',
    background: {
      hovered: '#54545445',
    },
    marker: {
      foreground: '#fcfcfc',
      background: '#806e8c',
    },
  },
});
