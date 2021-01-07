console.log("Service Worker from public folder");
let cacheData = "spacex";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((data) => {
            data.addAll([
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/static/js/main.chunk.js",
                "/static/media/astronaut.e3afeb7c.png",
                "/static/media/sunrise.a6a4739d.jpg",
                "/favicon.png",
                "/index.html",
                "/",
            ])
        })
        .catch((err)=> {
            console.log("error", err)
        })
        )
    })
this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
          if (response) {
              return response;
            }
            return fetch(event.request);
        }
        )
    );
});