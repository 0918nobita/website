const CACHE_NAME = 'vision-cache';

const CACHE_KEYS = [CACHE_NAME];

const CACHE_TARGETS = [
  'index.html',
  'lib/index.js',
  'web_modules/@emotion/core.js',
  'web_modules/react.js',
  'web_modules/react-dom.js',
];

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

      const needlessCaches = keys.filter(key => CACHE_KEYS.includes(key) === false);

      for (const key of needlessCaches) {
        caches.delete(key);
      }
    })()
  );
});
