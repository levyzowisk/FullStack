const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_CVV = document.getElementById('card_cvv');
const INPUT_TITULAR = document.getElementById('card_titular');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');
let card_numero = document.getElementById('resultado_numero');
let resustado_mes = document.getElementById('resultado_mes')
let resultado_ano = document.getElementById('resultado_ano');

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
    card_numero.innerHTML = INPUT_NUMERO.value;

}

function preencherMes(evento) {
    // console.log(evento.value);
    resustado_mes.innerHTML =  "0" + (meses.indexOf(evento.value) == 0 ? 1 : meses.indexOf(evento.value) + 1)
    // alert(meses.indexOf(evento.value));
}

function preencherAno(evento) {
    resultado_ano.innerHTML = evento.value
}



