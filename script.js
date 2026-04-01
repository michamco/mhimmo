function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function toggleImpressum() {
    const modal = document.getElementById("impressum-modal");
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

window.addEventListener('load', () => {
    AOS.init({ duration: 800, once: true });
});

window.onclick = function(event) {
    const modal = document.getElementById("impressum-modal");
    if (event.target == modal) { modal.style.display = "none"; }
}
