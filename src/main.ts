(async (): Promise<void> => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register(
                'serviceWorker.js',
                { scope: './' }
            );
            registration.update();
            console.log('serviceWorker registered successfully!');
        } catch (err) {
            console.log('ServiceWorker registration failed');
            console.error(err);
        }
    }
})();

const elem = document.getElementById('app');

if (elem) {
    console.log(elem.textContent + '!');
}
