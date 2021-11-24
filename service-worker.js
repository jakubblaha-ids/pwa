// Import WorkBox
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

const imageFallback = "logo.png";

// Set default request handler with the NetworkOnly strategy
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

// Listen to the SW install event and cache the offline fallback assets
self.addEventListener("install", (event) => {
    const files = [imageFallback];

    // Wait until SW installation finishes, then cache assets
    event.waitUntil(
        self.caches
            .open("workbox-offline-fallbacks")
            .then((cache) => cache.addAll(files))
    );
});

// Custom network error handler
const handler = async (options) => {
    const dest = options.request.destination;
    const cache = await self.caches.open("workbox-offline-fallbacks");

    if (dest === "document") {
        return (await cache.match(imageFallback)) || Response.error();
    }

    return Response.error();
};

// Register cutom error handler
workbox.routing.setCatchHandler(handler);
