// Inizializza AOS
AOS.init({ duration: 1000 });

// Toggle menu mobile
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');


btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


