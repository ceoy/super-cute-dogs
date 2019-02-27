
if (workbox) {

    // => prod settings
    workbox.setConfig({
        debug: false
    })

    workbox.skipWaiting()
    workbox.clientsClaim()

    // Silence all of the Workbox logs.
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

    // js caching
    workbox.routing.registerRoute(
        /.*\.js/,
        workbox.strategies.networkFirst()
    )

    // css caching
    workbox.routing.registerRoute(
        /.*\.css/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'css-cache'
        })
    )

    // cache images
    workbox.routing.registerRoute(
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        workbox.strategies.cacheFirst({
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache for a maximum of a week
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    )

    // cache google fonts
    workbox.routing.registerRoute(
        new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
        workbox.strategies.cacheFirst()
    )

    // handles precaching and navigation route
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
}