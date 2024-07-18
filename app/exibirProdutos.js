const elementoProdutos = document.getElementById('produtos');

function exibirProdutosNaTela(listaDeProdutos) {
  let categoriaAnt = '';
  elementoProdutos.innerHTML = '';
  listaDeProdutos.forEach(produto => {
    if(categoriaAnt != produto.categoria) {
      categoriaAnt = produto.categoria;
      elementoProdutos.innerHTML += `
        <div class="container row row-cols-1 produto__cabecalho__categoria">
          <div class="col">
            ${produto.categoria.toUpperCase()}
          </div>
        </div>
        <div class="container row row-cols-2 produto__cabecalho__linha">
          <div class="col-8">
            Produto
          </div>
          <div class="col-4 produto__cabecalho__preco">
            Preço
          </div>
        </div>
      `;
    };
    elementoProdutos.innerHTML += `
      <div class="container row row-cols-2 produto__linha">
        <div class="col-8 produto__linha__nome">
          ${produto.nome}
        </div>
        <div class="col-4 produto__linha__preco">
          ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
    `
    if(produto.complemento.length > 0) {
      elementoProdutos.innerHTML += `
        <div class="container row row-cols-1 produto__linha__complemento">
          <div class="col">
            ${produto.complemento}
          </div>
        </div>
      `
    };
  });
  if(categoriaAnt == '') {
    elementoProdutos.innerHTML = `
      <div class="container row row-cols-1">
        <div class="col produto__cabecalho__categoria">
          Não há produtos para opção selecionada.
        </div>
      </div>
    `;
  } else {
    elementoProdutos.innerHTML += `
      <div class="container row row-cols-1 mensagem__final">
        <div class="col">
          Todos os nossos produtos podem ser encomendados. Pergunte-nos sobre prazo de entrega.
        </div>
      </div>
    `;
  }
}
