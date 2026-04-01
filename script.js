// Menü Umschalten (Sidenav)
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// AOS Animationen initialisieren
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000, // Geschwindigkeit der Animation
        once: true,     // Animation nur einmal beim Scrollen ausführen
        offset: 100     // Startpunkt der Animation
    });
});

// Schließen des Menüs beim Klick auf einen Link (wichtig für One-Pager)
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("active");
    });
});
