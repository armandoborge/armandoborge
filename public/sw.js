var MAIN_CACHE = 'shell';
var DYNAMIC_CACHE = 'dynamic';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(MAIN_CACHE).then(function(cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/styles/main.css',
                '/scripts/main.js',
                'https://use.fontawesome.com/releases/v5.0.8/css/all.css',
                'https://fonts.googleapis.com/css?family=Raleway:300'
            ]);
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key){
                if (key !== MAIN_CACHE && key !== DYNAMIC_CACHE) {
                    return caches.delete(key);
                }
            }))
        })
    );

});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            else {
                return fetch(event.request)
                .then(function (res) {
                    return caches.open(DYNAMIC_CACHE).then(function (cache) {
                        cache.put(event.request.url, res.clone());
                        return res;
                    })
                })
                .catch(function(err){
                    console.log(err);
                });
            }
        })
    );
});