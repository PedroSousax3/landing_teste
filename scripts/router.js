function rotear (page, nome) {
    if (!!page)
        sessionStorage.setItem('page', page || 'inicio');
    let path = `${window.location.origin}/pages/${sessionStorage.getItem('page') || 'inicio'}.html`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        document.getElementById("render-conteudo").innerHTML = this.response;
        document.title = nome ?? "Início";
    };
    request.open("GET", path, true);
    request.send(null);
}