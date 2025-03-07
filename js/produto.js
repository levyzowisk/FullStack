const TABELA_PRODUTO = document.getElementById("table-products");

let dados = [
    {
        id: 1,
        name: 'Quinta do Morgado',
        categorie: 'Vinho Tinto Suave',
        imagem: 'https://midias.eurodicas.com.br/wp-content/uploads/2024/07/tudo-sobre-a-alemanha-1-1.jpg.webp',
        quantidade: 10,
        valor: 10.50
    } 
]

dados.map((value) => {
    TABELA_PRODUTO.innerHTML += `
    <tr>
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.categorie}</td>
        <td><img onclick = "abrirModal ('${value.imagem}')" data-bs-toggle="modal" data-bs-target="#exampleModal" width="50px" src=${value.imagem} alt=""></td>
        <td>${value.quantidade}</td>
        <td>${value.valor}</td>
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
});

function abrirModal(path) {
    
    document.getElementById('modal_produto_nome').innerHTML = `<img width=50px src='${path}'>`;

    
}