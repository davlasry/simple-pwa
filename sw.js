// importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// workbox.routing.registerRoute(
//     /\.(?:css|js)$/,
//     new workbox.strategies.StaleWhileRevalidate({
//         "cacheName": "assets",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 31536000
//             })
//         ]
//     })
// );
//
// workbox.routing.registerRoute(
//     /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
//     new workbox.strategies.CacheFirst({
//         "cacheName": "images",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 31536000
//             })
//         ]
//     })
// );

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('simple-pwa')
            .then(cache => {
                console.log(cache);
                return cache.addAll(urlsToCache);
            })
    )
    console.log('Service worker installed');
})

self.addEventListener('activate', event => {
    console.log('Service worker activated');
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    )
})

urlsToCache = [
    '/',
    '/images/image.png',
    '/scripts/app.js',
    '/scripts/static.js'
]
