const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("menu-links");

toggle.addEventListener("click", () => {
    links.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link
links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        links.classList.remove("aberto");
    });
});

function scrollToSobre() {
    const secaoSobre = document.getElementById("sobre");
    secaoSobre.scrollIntoView({ behavior: "smooth" });
}
