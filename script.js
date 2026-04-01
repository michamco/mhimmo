function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// AOS Animationen laden
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });
});
