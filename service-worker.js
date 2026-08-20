const CACHE_NAME = 'bs-kaseto-v1';
const ASSETS = [
    'index.html',
    'Recherche.html',
    'Statistiques.html',
    'Verification.html',
    'FAQ.html',
    'Connexion.html',
    'Mes%20Resultats.html',
    'Resultat_BAC.html',
    'Resultat_BEPC.html',
    'Resultat_CEP.html',
    'Resultat_CONCOURS.html',
    'style.css',
    'components.js',
    'script.js',
    'https://cdn.tailwindcss.com?plugins=forms,container-queries',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});