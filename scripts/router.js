function rotear (page, nome) {
    if (!!page) {
        sessionStorage.setItem('page', page || 'inicio');
        sessionStorage.setItem('name', nome || 'inicio');
    }
    let path = `${window.location.origin}/pages/${sessionStorage.getItem('page') || 'inicio'}.html`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        document.getElementById("render-conteudo").innerHTML = this.response;
        document.title = sessionStorage.getItem('name') || "Início";
    };
    request.open("GET", path, true);
    request.send(null);
}


function gerenciarMenu () {
    let elemento = document.getElementById("nvMenuTop");
    elemento.style.display = elemento.style.display == 'none' ? 'flex' : 'none';
}