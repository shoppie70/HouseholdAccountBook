const CACHE_NAME = "kakeibo-cache-v1";
const urlsToCache = [
    "/",
    "/pwa/manifest.json",
    "/pwa/192.png",
    "/pwa/512.png",
    "/css/styles.css", // 必要に応じてCSS/JSファイルを追加
    "/js/scripts.js",
];

// インストール時にキャッシュへファイルを登録
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// リクエストがあった場合、キャッシュからレスポンスを返す
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response; // キャッシュがあればそれを返却
            }
            return fetch(event.request); // なければ通常通りネットワークリクエスト
        })
    );
});

// 古いキャッシュを削除
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
