// Menü öffnen/schließen
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Modals steuern
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Sanfter Slide-Effekt & Menü Auto-Close
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Menü schließen
        document.getElementById("menu").classList.remove("active");
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Sanftes Scrollen mit Offset für Nav-Leiste
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Animationen initialisieren
window.addEventListener('load', () => {
    AOS.init({ duration: 800, once: true });
});

// Klick außerhalb vom Modal schließt dieses
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
