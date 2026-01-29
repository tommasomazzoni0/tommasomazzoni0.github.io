// Inizializza AOS
AOS.init({ duration: 1000 });

// Toggle menu mobile
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    menu.classList.toggle("right-0");
    menu.classList.toggle("right-[-100%]");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener('click', () => {
    menu.classList.add("right-[-100%]");
    menu.classList.remove("right-0");
    overlay.classList.add("hidden");
});
