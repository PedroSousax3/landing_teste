function enviarEmail() {
    let txtNome = document.getElementById('txtNome');
    let txtTelefone = document.getElementById('txtTelefone');
    let txtEmail = document.getElementById('txtEmail');
    let txtObservacao = document.getElementById('txtObservacao');

    if (txtNome.value && txtTelefone.value && txtEmail.value)
    {
        let toast = document.getElementById('liveToast'); 
    
        document.getElementById('dvMensagemEmailEnviado').innerText = `Olá ${txtNome.value.split(' ')[0]}, logo estaremos em contato com o senho(a).`;
        bootstrap.Toast.getOrCreateInstance(toast).show();
    
        txtNome.value = txtTelefone.value = txtEmail.value = txtObservacao.value = '';
    }
}