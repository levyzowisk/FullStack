// Capturando elementos do HTML.
const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');
const INPUT_NUMERO = document.getElementById('numero');


INPUT_CEP.addEventListener('blur', ()  => {
    let endereco = {
        logradouro: 'Rua Barca Velha',
        bairro: 'Quintino Cunha',
        cidade: 'Fortaleza',
        uf: 'CE'
    }   
 
    let url = `https://viacep.com.br/ws/${INPUT_CEP.value}/json/`
    fetch(url)
        .then(res => res.json())
        .then(endereco => {
            INPUT_LOGRADOURO.value = endereco.logradouro;
            INPUT_BAIRRO.value = endereco.bairro;
            INPUT_CIDADE.value = endereco.localidade;
            INPUT_UF.value = endereco.uf;
            INPUT_NUMERO.focus();   
        });

});