

var cacheName = 'i-like-hillary';
var fontCacheName = 'fonts-gistatic-com';
var filesToCache = [

'/css/main.css',
'/anchor.min.js',
'/img/back-caret.svg',
'/img/favicon-144.png',
'/img/favicon-192.png',
'/img/favicon-512.png',
'/img/favicon-72.png',
'/img/favicon-96.png',
'/favicon.ico',

'/',

'/issues/bad-experience/',

'/issues/but-hillary-wants-my-guns/',

'/issues/but-she-isnt-trustworthy/',

'/issues/clinton-foundation-crooked/',

'/issues/defending-child-abuser/',

'/issues/emails/',

'/issues/establishment-failed/',

'/issues/hawk/',

'/issues/hillary-is-cold/',

'/issues/hillary-lgbt/',

'/issues/isnt-hillary-too-sick/',

'/issues/trade/',


];

<<<<<<< HEAD
// Generated on Tue, 01 Nov 2016 13:03:32 -0400
=======
// Generated on Mon, 31 Oct 2016 09:33:45 -0400
>>>>>>> upstream/master

self.addEventListener('install', function(event) {
  self.skipWaiting();

  event.waitUntil(caches.open(cacheName).then(function(cache) {
    return cache.addAll(filesToCache);
  }));

});

self.addEventListener('fetch', function(event) {

  var url = new URL(event.request.url);

  if (url.host == 'fonts.gstatic.com' || url.host == 'fonts.googleapis.com') {
    event.respondWith(caches.open(fontCacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    }))

    return;
  }

  event.respondWith(caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  }));

});


