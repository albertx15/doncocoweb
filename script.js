// JavaScript to toggle language classes and mobile navigation
function setLang(lang) {
    // Update body class and document lang attribute
    document.body.className = lang;
    document.documentElement.lang = lang;

    // Update button active states
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('btn-' + lang).classList.add('active');
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.getElementById('menu-toggle');
    const isOpen = navMenu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
}

function closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.getElementById('menu-toggle');
    navMenu.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
}
