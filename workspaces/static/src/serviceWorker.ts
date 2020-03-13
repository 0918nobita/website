interface Self {
    clients: {
        claim(): Promise<void>;
    };
    skipWaiting(): void;
}

const CACHE_NAME = 'vision-cache-BUILD_HASH';

const CACHE_KEYS = [CACHE_NAME];

const CACHE_TARGETS = [
    '/',
    '/index.html',
    '/articles.html',
    '/404.html',
    '/main.js',
    '/legacy-main.js',
    '/global.css',
    '/icons/apple-touch-icon.png',
    '/icons/icon-32x32.png',
    '/manifest.json',
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
self.addEventListener('install', (event: any) => {
    event.waitUntil(
        (async (): Promise<void> => {
            const cache = await caches.open(CACHE_NAME);
            // Check if the browser supports self.skipWaiting method.
            if ('skipWaiting' in self) {
                ((self as unknown) as Self).skipWaiting();
            }
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

            // Check if the browser supports Client API.
            if ('clients' in self) {
                await ((self as unknown) as Self).clients.claim();
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
