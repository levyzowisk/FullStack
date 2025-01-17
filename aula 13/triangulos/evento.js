let a = prompt("Digite o tamanho do lado 1:");
let b = prompt("Digite o tamanho do lado 2:");
let c = prompt("Digite o tamanho do lado 3:");

if(a == b & c == a) {
    alert("Triângulo Equilatero")
}

else if(a == b || c == b || a == c ) {
    alert("Triângulo Isósceles");
}

else {
    alert("Triângulo Escaleno")
}

