self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('reader-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});