function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show-menu");
}


function searchContent(event) {
    let input = document.getElementById("search").value.toLowerCase(); // Captura o texto digitado
    let sections = document.querySelectorAll("main section"); // Seleciona todas as seções do conteúdo principal

    // Se o usuário pressionar a tecla "Enter" (keyCode 13)
    if (event.key === 'Enter') {
        let found = false;

        sections.forEach(section => {
            let text = section.innerText.toLowerCase(); // Pega o texto da seção

            if (text.includes(input) && !found) {
                // Rola até a primeira seção que corresponder
                section.scrollIntoView({ behavior: "smooth" });
                found = true; // Garantir que apenas a primeira seção correspondente seja rolada
            }
        });
    }
}



function searchContent(event) {
    let input = document.getElementById("search").value.toLowerCase(); // Captura o texto digitado
    let sections = document.querySelectorAll("main section"); // Seleciona todas as seções do conteúdo principal
    let links = document.querySelectorAll("aside .searchable-link"); // Seleciona todos os links no menu lateral

    // Se o usuário pressionar a tecla "Enter" (keyCode 13)
    if (event.key === 'Enter') {
        let found = false;

        // Procura nas seções
        sections.forEach(section => {
            let text = section.innerText.toLowerCase(); // Pega o texto da seção

            if (text.includes(input) && !found) {
                // Rola até a primeira seção que corresponder
                section.scrollIntoView({ behavior: "smooth" });
                found = true; // Garantir que apenas a primeira seção correspondente seja rolada
            }
        });

        // Procura nos links do menu lateral
        links.forEach(link => {
            let linkText = link.innerText.toLowerCase(); // Pega o texto do link

            if (linkText.includes(input) && !found) {
                // Abre o link correspondente (irá abrir a página associada)
                window.location.href = link.href;
                found = true; // Garantir que apenas o primeiro link correspondente seja aberto
            }
        });
    }
}
