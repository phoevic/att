const CACHE_NAME = 'attendance-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // 항상 네트워크에서 최신 버전을 가져오도록 설정
  event.respondWith(fetch(event.request));
});
