const CACHE_NAME = 'aimaster-v6';

// Force immediate activation
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network only - no caching
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (url.includes('anthropic.com')) return;
  if (e.request.method !== 'GET') return;
  // Always fetch fresh - no cache
  e.respondWith(fetch(e.request).catch(() => new Response('offline')));
});
