/**
 * Composants partagés pour la plateforme Bângr-sebre kaseto
 */

function renderSharedComponents() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const candidate = JSON.parse(sessionStorage.getItem('candidateDetails') || '{}');

    // --- CONFIGURATION DU HEADER ---
    const header = document.querySelector('header');
    if (header) {
        const navLinks = [
            { name: 'Accueil', url: 'index.html' },
            { name: 'Recherche', url: 'Recherche.html' },
            { name: 'Statistiques', url: 'Statistiques.html' },
            { name: 'Vérification', url: 'Verification.html' },
            { name: 'FAQ', url: 'FAQ.html' }
        ];

        const navHtml = navLinks.map(link => {
            const isActive = currentPage === link.url;
            const activeClass = isActive ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:bg-surface-container-low rounded-sm';
            return `<a class="font-label-md text-label-md transition-colors duration-200 ${activeClass} py-2 px-1" href="${link.url}">${link.name}</a>`;
        }).join('');

        const initial = candidate.name ? candidate.name.charAt(0).toUpperCase() : 'M';

        const authHtml = isLoggedIn ? `
            <div class="flex items-center gap-xs bg-surface-container-low px-3 py-2 rounded-full border border-outline-variant cursor-pointer hover:bg-surface-container-highest transition-colors" onclick="window.location.href='Mes%20Resultats.html'">
                <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">${initial}</div>
                <span class="font-label-md text-on-surface">${candidate.name || 'Mon Espace'}</span>
            </div>
            <button onclick="sessionStorage.clear(); window.location.href='index.html'" class="p-2 text-secondary hover:bg-red-50 rounded-full transition-colors" title="Déconnexion">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">logout</span>
            </button>
        ` : `
            <button onclick="window.location.href='Connexion.html'" class="bg-primary text-on-primary px-sm py-2 rounded-lg font-label-md hover:bg-primary-container transition-all flex items-center gap-base">
                <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">login</span>
                Se connecter
            </button>
        `;

        header.innerHTML = `
            <div class="flex justify-between items-center px-sm md:px-gutter py-base max-w-container-max mx-auto h-16">
                <div class="flex items-center gap-xs cursor-pointer" onclick="window.location.href='index.html'">
                    <span class="material-symbols-outlined text-primary text-3xl">account_balance</span>
                    <span class="hidden md:flex font-headline-md text-headline-md font-bold items-center gap-1">
                        <span class="text-secondary">Bângr-sebre</span>
                        <span class="material-symbols-outlined text-[#FFD700]" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="text-primary">kaseto</span>
                    </span>
                    <span class="md:hidden font-headline-md text-headline-md font-bold flex items-center gap-1">
                        <span class="text-secondary">B.</span> <span class="material-symbols-outlined text-[#FFD700]" style="font-variation-settings: 'FILL' 1; font-size: 1.2em;">star</span> <span class="text-primary">K.</span>
                    </span>
                </div>
                <nav class="hidden md:flex gap-md h-full items-center">${navHtml}</nav> 
                <div class="hidden md:flex items-center gap-sm">${authHtml}</div>
            </div>
        `;
    }

    // --- CONFIGURATION DU FOOTER ---
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="max-w-container-max mx-auto px-sm md:px-gutter">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
                    <div class="space-y-md">
                        <div class="flex items-center gap-xs">
                            <span class="material-symbols-outlined text-primary text-3xl">account_balance</span>
                            <span class="font-headline-md text-headline-md font-bold"><span class="text-secondary">Bângr-sebre</span> <span class="text-primary">kaseto</span></span>
                        </div>
                        <p class="text-on-surface-variant font-body-md leading-relaxed">Portail officiel de consultation des résultats aux examens nationaux et concours de la fonction publique au Burkina Faso.</p>
                        <div class="flex gap-sm">
                            <a href="#" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                                <span class="material-symbols-outlined text-lg">public</span>
                            </a>
                            <a href="mailto:support@examens.bf" class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
                                <span class="material-symbols-outlined text-lg">mail</span>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-md">
                        <h3 class="font-label-md text-on-surface uppercase tracking-widest text-xs font-bold">Plateforme</h3>
                        <ul class="space-y-sm">
                            <li><a href="index.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">Accueil</a></li>
                            <li><a href="Recherche.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">Recherche</a></li>
                            <li><a href="Statistiques.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">Statistiques</a></li>
                            <li><a href="Verification.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">Vérification</a></li>
                            <li><a href="FAQ.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">FAQ & Assistance</a></li>
                        </ul>
                    </div>
                    <div class="space-y-md">
                        <h3 class="font-label-md text-on-surface uppercase tracking-widest text-xs font-bold">Examens & Concours</h3>
                        <ul class="space-y-sm">
                            <li><a href="Recherche_CEP.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">CEP</a></li>
                            <li><a href="Recherche_BEPC.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">BEPC</a></li>
                            <li><a href="Recherche_BAC.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">BAC</a></li>
                            <li><a href="Recherche_CONCOURS.html" class="text-on-surface-variant hover:text-primary transition-colors text-sm">Concours Professionnels</a></li>
                        </ul>
                    </div>
                    <div class="space-y-md">
                        <h3 class="font-label-md text-on-surface uppercase tracking-widest text-xs font-bold">Coordonnées</h3>
                        <ul class="space-y-md">
                            <li class="flex gap-sm">
                                <span class="material-symbols-outlined text-primary">location_on</span>
                                <span class="text-on-surface-variant text-sm">Avenue de l'Indépendance, Ouagadougou 01</span>
                            </li>
                            <li class="flex gap-sm">
                                <span class="material-symbols-outlined text-primary">call</span>
                                <span class="text-on-surface-variant text-sm">Numéro Vert: 80 00 11 00</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pt-lg border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-md">
                    <div class="flex flex-col items-center md:items-start">
                        <p class="font-body-md text-label-sm text-on-surface-variant">© 2024 Gouvernement du Burkina Faso - DEC</p>
                        <div class="flex items-center gap-xs mt-xs text-[10px] uppercase font-bold text-primary tracking-widest">
                            <span class="w-2 h-2 bg-primary rounded-full"></span> Unité - Progrès - Justice
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-center gap-md text-label-sm">
                        <a class="text-on-surface-variant hover:text-secondary transition-all" href="FAQ.html">Mentions Légales</a>
                        <a class="text-on-surface-variant hover:text-secondary transition-all" href="FAQ.html">Protection des données</a>
                    </div>
                </div>
            </div>
        `;
    }

    // --- CONFIGURATION NAVIGATION MOBILE ---
    const mobileNav = document.querySelector('nav.fixed.bottom-0');
    if (mobileNav) {
        const items = [
            { name: 'Accueil', icon: 'home', url: 'index.html', prefix: 'index' },
            { name: 'Recherche', icon: 'search', url: 'Recherche.html', prefix: 'Recherche' },
            { name: 'Stats', icon: 'bar_chart', url: 'Statistiques.html', prefix: ['Statistiques', 'Resultat'] },
            { name: 'Vérifier', icon: 'verified', url: 'Verification.html', prefix: 'Verification' },
            { name: 'FAQ', icon: 'help_outline', url: 'FAQ.html' }
        ];

        mobileNav.innerHTML = items.map(item => {
            // Détection intelligente de la page active
            let isActive = currentPage === item.url;
            if (item.prefix) {
                const prefixes = Array.isArray(item.prefix) ? item.prefix : [item.prefix];
                isActive = prefixes.some(p => currentPage.startsWith(p));
            }

            const linkClass = isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary';
            const iconContainerClass = isActive ? 'bg-primary/10 px-5 py-1 rounded-full' : 'px-5 py-1';
            const iconStyle = isActive ? "font-variation-settings: 'FILL' 1;" : "";

            return `
                <a href="${item.url}" class="flex flex-col items-center justify-center ${linkClass} flex-1 gap-1 transition-all duration-200 active:scale-95">
                    <div class="${iconContainerClass} flex items-center justify-center transition-colors">
                        <span class="material-symbols-outlined" style="${iconStyle}">${item.icon}</span>
                    </div>
                    <span class="font-label-sm text-label-sm ${isActive ? 'font-bold' : ''}">${item.name}</span>
                </a>
            `;
        }).join('');
    }
}
document.addEventListener('DOMContentLoaded', renderSharedComponents);

// Enregistrement du Service Worker pour le mode hors-ligne
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .catch(err => console.error('Erreur Service Worker:', err));
    });
}