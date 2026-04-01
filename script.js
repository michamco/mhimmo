function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Initialisierung der Scroll-Animationen
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        once: true
    });
});

// Schließt Menü beim Klick auf einen Link
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("active");
    });
});
