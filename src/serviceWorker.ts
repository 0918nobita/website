const CACHE_NAME = 'vision-cache';

const CACHE_KEYS = [CACHE_NAME];

const CACHE_TARGETS = ['/', '/index.html', '/main.js', '/legacy-main.js'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
self.addEventListener('install', (event: any) => {
    event.waitUntil(
        (async (): Promise<void> => {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(CACHE_TARGETS);
        })()
    );
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
self.addEventListener('activate', (event: any) => {
    event.waitUntil(
        (async (): Promise<void> => {
            const keys = await caches.keys();

            const needlessCaches = keys.filter(
                key => CACHE_KEYS.includes(key) === false
            );

            for (const key of needlessCaches) {
                caches.delete(key);
            }
        })()
    );
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
self.addEventListener('fetch', (event: any) => {
    event.respondWith(
        caches.match(event.request).then(res => res || fetch(event.request))
    );
});
