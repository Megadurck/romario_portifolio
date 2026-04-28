const modal = document.getElementById("modal-print");
const modalImg = document.getElementById("img-modal");
const fecharModal = document.querySelector(".fechar-modal");
const filterButtons = document.querySelectorAll(".filtro-btn");
const projectCards = document.querySelectorAll(".projeto-card");

// Abrir modal ao clicar no botão
document.querySelectorAll(".btn-print").forEach(btn => {
    btn.addEventListener("click", () => {
        const imgSrc = btn.getAttribute("data-img");
        if (!modal || !modalImg || !imgSrc) {
            return;
        }

        modal.style.display = "flex";
        modalImg.src = imgSrc;
    });
});

// Fechar ao clicar no X
if (fecharModal && modal) {
    fecharModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Fechar ao clicar fora da imagem
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove("ativo"));
        button.classList.add("ativo");

        projectCards.forEach((card) => {
            const categories = (card.dataset.categories || "").split(" ").filter(Boolean);
            const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);

            card.classList.toggle("oculto", !shouldShow);
        });
    });
});
