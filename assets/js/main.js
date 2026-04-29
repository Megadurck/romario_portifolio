const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("menu-links");
const introScrollBtn = document.getElementById("intro-scroll-btn");

document.querySelectorAll(".skill-item i").forEach((icon) => {
    icon.setAttribute("aria-hidden", "true");
});

function closeMenu() {
    if (!links || !toggle) {
        return;
    }

    links.classList.remove("aberto");
    toggle.setAttribute("aria-expanded", "false");
}

if (toggle && links) {
    toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("aberto");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
}

// Fecha o menu ao clicar em um link
if (links) {
    links.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

document.addEventListener("click", (event) => {
    if (!links || !toggle) {
        return;
    }

    const clickedInsideMenu = links.contains(event.target);
    const clickedToggle = toggle.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
    }
});

if (introScrollBtn) {
    introScrollBtn.addEventListener("click", () => {
        scrollToSobre();
    });
}

function scrollToSobre() {
    const secaoSobre = document.getElementById("sobre");
    if (!secaoSobre) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    secaoSobre.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}
