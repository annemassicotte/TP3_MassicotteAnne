//Update cache names any time any of the cached files change.
const CACHE_NAME = "static-cache-v5";
//Add list of files to cache here.
const FILES_TO_CACHE = [
	"manifest.json",
	"index.html",
	"recettes.html",
	"boites-repas.html",
	"confirmation.html",
	"offline.html",
	"styles/css/styles.css",
	"js/index.js",
	"js/validation.js",
	"images/beignes.jpg",
	"images/bouchees-choco.jpg",
	"images/burger.jpg",
	"images/categorie-collation.jpg",
	"images/categorie-dejeuner.jpg",
	"images/categorie-dessert.jpg",
	"images/categorie-diner-souper.jpg",
	"images/crepes.jpg",
	"images/gateau.jpg",
	"images/gaufres.jpg",
	"images/granola.jpg",
	"images/ingredients-boite-repas.jpg",
	"images/logo_recettes_veganne_blanc.svg",
	"images/logo_recettes_veganne_noir.svg",
	"images/pain-bananes.jpg",
	"images/pains-dores.jpg",
	"images/pates.jpg",
	"images/pattern-feuilles.jpg",
	"images/pizza.jpg",
	"images/popcorn.jpg",
	"images/pouding.jpg",
	"images/sandwich.jpg",
	"images/smoothie.jpg",
	"images/tarte.jpg",
	"images/toasts.jpg",
	"images/tofu.jpg",
	"images/tortilla.jpg",
	"images/icons/maskable_icon_x48.png",
	"images/icons/maskable_icon_x72.png",
	"images/icons/maskable_icon_x96.png",
	"images/icons/maskable_icon_x128.png",
	"images/icons/maskable_icon_x144.png",
	"images/icons/maskable_icon_x192.png",
	"images/icons/maskable_icon_x384.png",
	"images/icons/maskable_icon_x512.png",
];

self.addEventListener("install", (evt) => {
	console.log("[ServiceWorker] Install");
	// Precache static resources here.

	evt.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("[ServiceWorker] Pre-caching offline page");
			return cache.addAll(FILES_TO_CACHE);
		})
	);

	self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
	console.log("[ServiceWorker] Activate");
	//Remove previous cached data from disk.

	evt.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== CACHE_NAME) {
						console.log("[ServiceWorker] Removing old cache", key);
						return caches.delete(key);
					}
				})
			);
		})
	);

	self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
	console.log("[ServiceWorker] Fetch", evt.request.url);
	//Add fetch event handler here.
	if (evt.request.mode !== "navigate") {
		// Not a page navigation, bail.
		return;
	}
	evt.respondWith(
		fetch(evt.request).catch(() => {
			return caches.open(CACHE_NAME).then((cache) => {
				return cache.match("offline.html");
			});
		})
	);
});
