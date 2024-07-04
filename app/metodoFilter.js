const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarProdutos))

function filtrarProdutos() {
    const elementoBtn = document.getElementById(this.id)
    const tipo = elementoBtn.value
    let produtosFiltrados = tipo == 'disponivel' ? produtos.filter(produto => produto.disponivel == "sim") : produtos.filter(produto => produto.tipo == tipo)
    exibirProdutosNaTela(produtosFiltrados)
}