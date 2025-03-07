const CHECK_CATEGORIA = document.getElementById('modulo_categoria');
const CHECK_CLIENTE = document.getElementById('modulo_cliente');
const CHECK_PAIS = document.getElementById('modulo_pais');
const CHECK_PRODUTO  = document.getElementById('modulo_produto');
const CHECK_PEDIDO = document.getElementById('modulo_pedido');
const SPAN_MODULO = document.getElementById('modulo');
let oi = 0;

function check (evento) {
    
    if(evento.checked === true) {
        oi += 1;
    } else {
        oi -= 1;
    }
    SPAN_MODULO.innerHTML = oi;
}

function habilitarDarkmode(evento) {
    if(evento.checked === false) {
        localStorage.setItem('DarkMode', 'Não');
        location.href = "";
        return
    }
    localStorage.setItem('DarkMode', 'Sim');
    document.getElementsByTagName("head")[0].innerHTML += `<link rel="stylesheet" href="../css/darkmode.css">`
} 



