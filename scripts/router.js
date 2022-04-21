function rotear (page, nome) {
    if (!!page) {
        sessionStorage.setItem('page', page || 'inicio');
        sessionStorage.setItem('name', nome || 'inicio');
    }
    let path = `${window.location.origin}/pages/${sessionStorage.getItem('page') || 'inicio'}.html`;

    fetch(path, { 
        method: 'GET'
        //cache: 'default'//'force-cache'
    })
    .then((resp) => resp.text())
    .then(function (content) {
        document.title = sessionStorage.getItem('name') || "Início";
        document.getElementById("render-conteudo").innerHTML = content;
    });

    gerenciarMenu();
}

function gerenciarMenu () {
    let elemento = document.getElementById("nvMenuTopMobile");
    if (window.innerWidth <= 575){
        elemento.style.display = elemento.style.display == 'none' ? 'flex' : 'none';
    }
    else
        elemento.style.display = 'none';
}