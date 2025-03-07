// Pegando o elemento HTML.
const TABELA = document.getElementById('table-categories');

let dados = [
    {
        id: 1,
        name: 'Coca Cola',
        description: 'Pra ativar o modo on-fire no carnaval'
    },
    {
        id: 2,
        name: 'Guanara Jesus',
        description: 'De bom só o nome mesmo viu'
    },
    {
        id: 3,
        name: 'Ypioca',
        description: 'Beba e veja a desgraça com os olhos'
    }
];


dados.map(addLinha)

function addLinha(value) {
    TABELA.innerHTML += `
        <tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.description}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>
                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>
`

}
// Se a função só tem um uso, logo podemos usar função anônima ou arrow function.

// for(let i = 0; i <= dados.length; i++) {
//     TABELA.innerHTML += `
//     <tr>
//             <td>${dados[i].id}</td>
//             <td>${dados[i].name}</td>
//             <td>${dados[i].description}</td>
//             <td>
//                 <a href="#" class="btn btn-outline-warning btn-sm">
//                     Editar
//                 </a>
//                 <a href="#" class="btn btn-outline-danger btn-sm">
//                     Excluir
//                 </a>
//             </td>
//         </tr>
// `
// }