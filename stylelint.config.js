module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: 4,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['tailwind'],
            },
        ],
    },
    ignoreFiles: ['node_modules/**/*.css', 'out/**/*.css'],
};
