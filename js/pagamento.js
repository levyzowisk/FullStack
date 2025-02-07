const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_CVV = document.getElementById('card_cvv');
const CARD_TITULAR = document.getElementById('card_titular');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');
let card_numero = document.getElementById('resultado_numero');
let resustado_mes = document.getElementById('resultado_mes')
let resultado_ano = document.getElementById('resultado_ano');
let resultado_nome = document.getElementById('resultado_nome');
const INPUT_TITULAR = document.getElementById("input_titular");
let img_master =  document.getElementById('bandeira_mastercard');
let img_visa = document.getElementById('bandeira_visa');
const CARTAO_VERSO = document.getElementById('resultado_cvv');
let hoje = new Date();
let anoFim = hoje.getFullYear() + 10;
for(let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option> ${ano}</option>`;
} 

const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

meses.map((mes) => {
    SELECT_MES.innerHTML += `<option> ${mes}</option>`;

})

function preencherNumero() {
    let digitos = INPUT_NUMERO.value;
    card_numero.innerHTML = digitos;
    alterarBandeira()
}

function  removerUltimoDigito(numero) {
    return numero.substr(0, numero.length - 1)
}

function preencherMes(evento) {
    // console.log(evento.value);
    resustado_mes.innerHTML =  "0" + (meses.indexOf(evento.value) == 0 ? 1 : meses.indexOf(evento.value) + 1)
    // alert(meses.indexOf(evento.value));
}

function preencherAno(evento) {
    resultado_ano.innerHTML = evento.value
}

function preencherNome() {
    resultado_nome.innerHTML = INPUT_TITULAR.value
}


function alterarBandeira() {
    if(INPUT_NUMERO.value.length > 1) {
        return;
    }
    // Posso verificar se o tamanho de digitos do input é maior que um, ou seja, ele nao executara, maias de uma vez, o document;
    img_master.style.display = 'none';
    img_visa.style.display = 'none';
    if(INPUT_NUMERO.value.startsWith('4')) {
        img_master.style.display = 'block';
        img_visa.style.display = 'none';
    } 
    if(INPUT_NUMERO.value.startsWith('5')) {
        img_visa.style.display = 'block';
        img_master.style.display = 'none';
    }

} 

function preencherCvv() {
    CARTAO_VERSO.innerHTML = INPUT_CVV.value;
}


function mostarFrente() {
    document.getElementById('cartao_frente').classList.add('animate__slideInRight') ;

    document.getElementById('cartao_frente').style.display = 'block';
    document.getElementById('cartao_verso').style.display = 'none';
}

function mostrarVerso() {
    document.getElementById('cartao_verso').classList.add('animate__slideInRight') ;

    document.getElementById('cartao_verso').style.display = 'block ';
    document.getElementById('cartao_frente').style.display = 'none';


}