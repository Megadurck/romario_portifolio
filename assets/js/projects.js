const modal = document.getElementById("modal-print");
const modalImg = document.getElementById("img-modal");
const fecharModal = document.querySelector(".fechar-modal");
const filterButtons = document.querySelectorAll(".filtro-btn");
const projectCards = document.querySelectorAll(".projeto-card");
let lastTriggerButton = null;

function closeModal() {
    if (!modal || !modalImg) {
        return;
    }

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modalImg.removeAttribute("src");
    document.body.style.overflow = "";

    if (lastTriggerButton) {
        lastTriggerButton.focus();
        lastTriggerButton = null;
    }
}

function openModal(btn) {
    const imgSrc = btn.getAttribute("data-img");
    if (!modal || !modalImg || !imgSrc) {
        return;
    }

    const card = btn.closest(".projeto-card");
    const title = card ? card.querySelector("h3") : null;
    const altText = title ? `Preview do projeto ${title.textContent.trim()}` : "Preview do projeto";

    lastTriggerButton = btn;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = imgSrc;
    modalImg.alt = altText;
    document.body.style.overflow = "hidden";

    if (fecharModal) {
        fecharModal.focus();
    }
}

// Abrir modal ao clicar no botão
document.querySelectorAll(".btn-print").forEach(btn => {
    btn.addEventListener("click", () => {
        openModal(btn);
    });
});

// Fechar ao clicar no X
if (fecharModal && modal) {
    fecharModal.addEventListener("click", () => {
        closeModal();
    });
}

// Fechar ao clicar fora da imagem
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && modal.style.display === "flex") {
        closeModal();
    }
});

filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.classList.contains("ativo") ? "true" : "false");
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
            item.classList.remove("ativo");
            item.setAttribute("aria-pressed", "false");
        });
        button.classList.add("ativo");
        button.setAttribute("aria-pressed", "true");

        projectCards.forEach((card) => {
            const categories = (card.dataset.categories || "").split(" ").filter(Boolean);
            const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);

            card.classList.toggle("oculto", !shouldShow);
        });
    });
});
