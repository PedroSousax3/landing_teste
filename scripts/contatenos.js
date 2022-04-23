console.log('contatenos');
function enviarEmail() {
    let txtNome = document.getElementById('txtNome');
    let txtTelefone = document.getElementById('txtTelefone');
    let txtEmail = document.getElementById('txtEmail');
    let txtObservacao = document.getElementById('txtObservacao');
    let toast = document.getElementById('liveToast'); 

    if (txtNome.value && txtTelefone.value && txtEmail.value)
        alert(`Olá ${txtNome.value.split(' ')[0]}, logo estaremos em contato com o senho(a).`);
    else
        alert(`Preencha os campos "Nome", "Telefone" e "E-mail".`);
}