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
        scrollToProjetos();
    });
}

const navigationLinks = document.querySelectorAll(".menu-links a");
const navigationSections = [...navigationLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

if (navigationLinks.length && navigationSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        const currentSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!currentSection) {
            return;
        }

        navigationLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${currentSection.target.id}`;
            link.classList.toggle("ativo", isCurrent);
            link.setAttribute("aria-current", isCurrent ? "page" : "false");
        });
    }, { rootMargin: "-35% 0px -55%", threshold: [0.1, 0.4, 0.7] });

    navigationSections.forEach((section) => sectionObserver.observe(section));
}

function scrollToProjetos() {
    const secaoProjetos = document.getElementById("projetos");
    if (!secaoProjetos) {
        return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    secaoProjetos.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}
