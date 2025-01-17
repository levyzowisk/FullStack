// Pega a quantidade de notas, para depois somar a média.
const qtd_notas = prompt("Digite a quantidades de notas:");
// Array que terá a finalidade de armazenar as notas e depois somar as notas.
let notas = []
let soma_notas = 0;

// For que tem a finalidade de colocar no array, todas as notas que o usuário informou. 
for(let i = 1; i <= qtd_notas; i++) {
    // 
    let nota = Number(prompt(`Digite a nota ${i}:` ));
    // notas.push(Number(prompt(`Digite a nota ${i}:` )))    
    notas.push(nota);
    soma_notas += notas[i];
}

//  for(let i= 0; i < qtd_notas; i++) {    
//     soma_notas += notas[i] 
//  }

 console.log(soma_notas);

