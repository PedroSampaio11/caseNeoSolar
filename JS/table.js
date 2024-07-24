const geradores = [
    {
      Id: 11111,
      Potencia: "1500W",
      Produtos: "1001, 3001, 2001",
      NomedosProdutos: "Painel Solar 500 W Marca A, Inversor 500W Marca D, Controlador de Carga 30A Marca E",
      Quantidade: 1,
    },
    {
      Id: 22222,
      Potencia: "1500W",
      Produtos: "1002, 3001, 2001",
      NomedosProdutos: "Painel Solar 500 W Marca B, Inversor 500W Marca D, Controlador de Carga 30A Marca E",
      Quantidade: 1,
    },
    {
      Id: 33333,
      Potencia: "1500W",
      Produtos: "1003, 3001, 2001",
      NomedosProdutos: "Painel Solar 500 W Marca C, Inversor 500W Marca D, Controlador de Carga 30A Marca E",
      Quantidade: 1,
    },
    {
      Id: 44444,
      Potencia: "2500W",
      Produtos: "1001, 3002, 2003",
      NomedosProdutos: "Painel Solar 500 W Marca A, Inversor 1000W Marca D, Controlador de Carga 40A Marca D",
      Quantidade: 1,
    },
    {
      Id: 55555,
      Potencia: "1500W",
      Produtos: "1002, 3002, 2003",
      NomedosProdutos: "Painel Solar 500 W Marca B, Inversor 1000W Marca D, Controlador de Carga 40A Marca D",
      Quantidade: 1,
    },
    {
      Id: 66666,
      Potencia: "2500W",
      Produtos: "1003, 3002, 2003",
      NomedosProdutos: "Painel Solar 500 W Marca C, Inversor 1000W Marca D, Controlador de Carga 40A Marca D",
      Quantidade: 1,
    },
    {
      Id: 77777,
      Potencia: "1750W",
      Produtos: "1001, 3001, 2002",
      NomedosProdutos: "Painel Solar 500 W Marca A, Inversor 500W Marca D, Controlador de Carga 50A Marca E",
      Quantidade: 1,
    },
    {
      Id: 88888,
      Potencia: "1750W",
      Produtos: "1003, 3001, 2002",
      NomedosProdutos: "Painel Solar 500 W Marca B, Inversor 500W Marca D, Controlador de Carga 50A Marca D",
      Quantidade: 1,
    },
    {
      Id: 99999,
      Potencia: "1750W",
      Produtos: "1003, 3001, 2002",
      NomedosProdutos: "Painel Solar 500 W Marca C, Inversor 500W Marca D, Controlador de Carga 50A Marca D",
      Quantidade: 1,
    },
  ];

  function populateTable(geradores) {
    const tbody = document.querySelector('#tbody');

    geradores.forEach(gerador => {
            const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = gerador.Id;
        row.appendChild(idCell);

        const potenciaCell = document.createElement('td');
        potenciaCell.textContent = gerador.Potencia;
        row.appendChild(potenciaCell);

        const produtosCell = document.createElement('td');
        produtosCell.textContent = gerador.Produtos;
        row.appendChild(produtosCell);

        const nomedosProdutosCell = document.createElement('td');
        nomedosProdutosCell.textContent = gerador.NomedosProdutos;
        row.appendChild(nomedosProdutosCell);

        const quantidadeCell = document.createElement('td');
        quantidadeCell.textContent = gerador.Quantidade;
        row.appendChild(quantidadeCell);

        tbody.appendChild(row);
    });
}

// Preencher a tabela com os dados
populateTable(geradores);
