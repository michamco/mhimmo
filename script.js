// Menü ein/aus
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Modals
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Slide-Effekt beim Klick auf Menü-Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Erst das Menü schließen
        toggleMenu();

        // Dann sanft zur Sektion sliden
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // 70px Offset für die fixierte Nav-Leiste
            behavior: 'smooth'
        });
    });
});

// Initialisierung Animationen
window.addEventListener('load', () => {
    AOS.init({ duration: 800, once: true });
});

// Klick außerhalb vom Modal schließt es
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
