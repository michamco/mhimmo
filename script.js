// Mobile Menü
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Modals öffnen/schließen
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// AOS Animationen
window.addEventListener('load', () => {
    AOS.init({ duration: 800, once: true });
});

// Schließen bei Klick außerhalb
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
