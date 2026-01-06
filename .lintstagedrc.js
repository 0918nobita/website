export default {
  '*.{css,js,json,ts,vue}': (paths) => {
    const files = paths.join(' ');
    return [`oxlint ${files}`, `oxfmt --check ${files}`];
  },

  '*.{ts,vue}': () => 'nuxt typecheck',
};
