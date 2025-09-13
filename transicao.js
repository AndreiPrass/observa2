document.addEventListener("DOMContentLoaded", () => {
    // Aplica fade-in quando a página carrega
    document.body.classList.add("fade-in");

    let isTransitioning = false; // evita cliques múltiplos

    const links = document.querySelectorAll(".transition-link");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // previne a mudança imediata

            if (isTransitioning) return; // bloqueia novos cliques
            isTransitioning = true;

            const href = this.getAttribute("href");

            // Adiciona fade-out
            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            // Espera o tempo da transição antes de mudar de página
            setTimeout(() => {
                window.location.href = href;
            }, 500); // 500ms = tempo do CSS
        });
    });
});
