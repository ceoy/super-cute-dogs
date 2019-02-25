var cacheName = 'supercutedogs-cache'
self.__precacheManifest = [].concat(self.__precacheManifest || []).map((thing) => {
    return thing.url
});

self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Install")
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching App Shell")
            return cache.addAll(self.__precacheManifest)
        })
    )
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log("[ServiceWorker] Cache hit - return response")
                return response
            }
            console.log("[ServiceWorker] Fetch Resource")
            return fetch(event.request)
        })
    )
})