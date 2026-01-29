// Inizializza AOS
AOS.init({ duration: 1000 });

// Toggle menu mobile
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.menu-link');

// Funzione per aprire/chiudere il menu
function toggleMenu() {
    menu.classList.toggle("right-0");
    menu.classList.toggle("right-[-100%]");
    overlay.classList.toggle("hidden");
}

// Click sul pulsante
btn.addEventListener('click', toggleMenu);

// Click sull’overlay
overlay.addEventListener('click', () => {
    menu.classList.add("right-[-100%]");
    menu.classList.remove("right-0");
    overlay.classList.add("hidden");
});

// Click su qualsiasi link del menu
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add("right-[-100%]");
        menu.classList.remove("right-0");
        overlay.classList.add("hidden");
    });
});