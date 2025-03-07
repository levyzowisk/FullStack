const TABLE = document.getElementById('table-clientes');

let url = `https://feitoza.tec.br/api/index.php`;
fetch(url)
    .then(res => res.json())
    .then(dados => {
        console.log(dados);
        
        dados.forEach(element => {
                TABLE.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nome}</td>
                    <td>${element.email}</td>
                    <td>${element.telefone}</td>
                    <td><img src=${element.foto} width="50"></td>
                    <td>${element.data_cadastro}</td>
                    <td>${element.data_ultimo_pedido}</td>
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

    // client.map((cliente) => {
    //     TABLE.innerHTML += `
    //     <tr> 
    //         <td>${cliente.id} </td>
    //     </tr>

    //     `
    // })

        })

        