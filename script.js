// Funktion zum Umschalten des Seitenmenüs
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// AOS Animationen initialisieren
window.addEventListener('load', function() {
    AOS.init({
        duration: 800, // Dauer der Animationen
        once: true,    // Animationen nur einmal abspielen
        offset: 200,   // Animationen starten, wenn Element 200px im Viewport ist
    });
});
