const CACHE = "lap-zero-v2.0.0";
const SHELL = ["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.url.includes("api.anthropic.com")) return;
  e.respondWith(caches.match(e.request).then(cached => {
    const network = fetch(e.request).then(res => { if (res.ok && e.request.method === "GET") caches.open(CACHE).then(c => c.put(e.request,res.clone())); return res; }).catch(() => cached);
    return cached || network;
  }));
});
