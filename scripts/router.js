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

function lerQueryString() {
    let resposta = {};
    location.search.slice(1).split("&").forEach(m => {
        let resultado = m.split("=");
        resposta[decodeURIComponent(resultado[0])] = decodeURIComponent(resultado[1]) || '';
    });
    
    return resposta;
}