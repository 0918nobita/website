// #if !_LEGACY
(async (): Promise<void> => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register(
                'serviceWorker.js',
                { scope: './' }
            );
            registration.update();
        } catch (err) {
            console.error(err);
        }
    }
})();
// #endif

console.log(
    `%cWhat are you lookin' at?`,
    'color: purple; font-size: large; font-weight: bold'
);
