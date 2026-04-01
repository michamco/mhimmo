// Menü für Mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Impressum Modal umschalten
function toggleImpressum() {
    const modal = document.getElementById("impressum-modal");
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

// Initialisierung Animationen
window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        once: true
    });
});

// Schließt Menü beim Klick auf Link
document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("active");
    });
});

// Schließt Modal wenn man außerhalb klickt
window.onclick = function(event) {
    const modal = document.getElementById("impressum-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
