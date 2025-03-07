const TABELA = document.getElementById('table-paises');

const dados =  [
    {
        id: 1,
        pais: "Brazil",
        bandeira: "BR"
    },
    {
        id: 2,
        pais: "Alemanha",
        bandeira: "DE"
    },
    {
        id: 3,
        pais: "Portugal",
        bandeira: "PT"
    }
];

dados.map((value) => {
    TABELA.innerHTML += `
    <tr>
        <td>${value.id}</td>
        <td>${value.pais}</td>
        <td>${value.bandeira}</td>
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
})