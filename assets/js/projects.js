const modal = document.getElementById("modal-print");
const modalImg = document.getElementById("img-modal");
const fecharModal = document.querySelector(".fechar-modal");

// Abrir modal ao clicar no botão
document.querySelectorAll(".btn-print").forEach(btn => {
    btn.addEventListener("click", () => {
        const imgSrc = btn.getAttribute("data-img");
        modal.style.display = "flex";
        modalImg.src = imgSrc;
    });
});

// Fechar ao clicar no X
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
