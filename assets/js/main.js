const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("menu-links");

toggle.addEventListener("click", () => {
    links.style.display = links.style.display === "flex" ? "none" : "flex";
});

function scrollToSobre() {
    const secaoSobre = document.getElementById("sobre");
    secaoSobre.scrollIntoView({ behavior: "smooth" });
}
