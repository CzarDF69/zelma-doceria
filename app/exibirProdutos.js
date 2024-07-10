const elementoProdutos = document.getElementById('produtos')

function exibirProdutosNaTela(listaDeProdutos) {
  elementoProdutos.innerHTML = `
    <div class="container row row-cols-2 produto__cabecalho">
      <div class="col-8">
        Produto
      </div>
      <div class="col-4 produto__cabecalho__preco">
        Preço
      </div>
    </div>
  `;

  listaDeProdutos.forEach(produto => {
    elementoProdutos.innerHTML += `
      <div class="container row row-cols-2">
        <div class="col-8 produto__nome">
          ${produto.nome}
        </div>
        <div class="col-4 produto__preco">
          ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
    `
  });
  elementoProdutos.innerHTML += `</div>`;
}
