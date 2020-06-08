const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');

module.exports = withPlugins([
    optimizedImages,
    withPWA({
        pwa: {
            dest: 'public',
            disable: process.env.NODE_ENV !== 'production',
        },
    }),
]);
