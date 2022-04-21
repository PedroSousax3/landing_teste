function enviarEmail() {
    let txtNome = document.getElementById('txtNome');
    let txtTelefone = document.getElementById('txtTelefone');
    let txtEmail = document.getElementById('txtEmail');
    let txtObservacao = document.getElementById('txtObservacao');
    let toast = document.getElementById('liveToast'); 

    if (txtNome.value && txtTelefone.value && txtEmail.value)
    {
        document.getElementById('dvTituloEmailEnviado').innerText = 'E-mail envido com sucesso!';
        document.getElementById('dvMensagemEmailEnviado').innerText = `Olá ${txtNome.value.split(' ')[0]}, logo estaremos em contato com o senho(a).`;
        bootstrap.Toast.getOrCreateInstance(toast).show();
    
        txtNome.value = txtTelefone.value = txtEmail.value = txtObservacao.value = '';
    }
    else
    {
        document.getElementById('dvTituloEmailEnviado').innerText = 'Aviso';
        document.getElementById('dvMensagemEmailEnviado').innerText = `Preencha os campos "Nome", "Telefone" e "E-mail".`;
        bootstrap.Toast.getOrCreateInstance(toast).show();
    }
}