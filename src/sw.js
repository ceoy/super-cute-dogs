workbox.skipWaiting()
workbox.clientsClaim()

// Silence all of the Workbox logs.
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);

workbox.routing.registerRoute(
    new RegExp('http://localhost:8080/'),
    workbox.strategies.staleWhileRevalidate()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest);