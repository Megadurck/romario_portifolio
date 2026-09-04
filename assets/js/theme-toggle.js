const botaoTema = document.getElementById("theme-toggle");

function aplicarTema(tema) {
    if (tema === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    if (botaoTema) {
        botaoTema.setAttribute(
            "aria-label",
            tema === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
        );
    }
}

if (botaoTema) {
    botaoTema.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        localStorage.setItem("tema", novoTema);
        aplicarTema(novoTema);
    });
}

aplicarTema(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
