// Effet de scroll sur la page

window.addEventListener("scroll", () => {
    document.querySelector("body").classList.toggle("scrolled", window.scrollY > 50);
});