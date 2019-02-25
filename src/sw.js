workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
    new RegExp('http://localhost:8080/'),
    workbox.strategies.staleWhileRevalidate()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest);