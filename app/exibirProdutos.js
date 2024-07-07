const elementoParaInserir = document.getElementById('produtos')

function exibirProdutosNaTela(listaDeProdutos) {
  elementoParaInserir.innerHTML = ''
  listaDeProdutos.forEach(produto => {
    let disponibilidade = produto.disponivel == 'sim' ? ' ' : ' indisponivel'
    elementoParaInserir.innerHTML += `
        <div class="shadow-sm m-2 produto">
          <img class="produto__imagens${disponibilidade}" src="${produto.imagem}"
            alt="${produto.alt}" />
          <h2 class="produto__nome">
            ${produto.nome}
          </h2>
          <h2 class="produto__preco${disponibilidade}">
            R$${produto.preco.toFixed(2)}
          </h2>
        </div>
      `
  })
}
