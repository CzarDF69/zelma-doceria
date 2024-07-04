const botoes = document.querySelectorAll('.btn')
botoes.forEach((btn) => btn.value == 'sobre' ? btn.addEventListener('click', goSobre) : btn.addEventListener('click', filtrarProdutos));

function filtrarProdutos() {
    const elementoBtn = document.getElementById(this.id)
    const tipo = elementoBtn.value
    // let produtosFiltrados = tipo == 'disponivel' ? produtos.filter(produto => produto.disponivel == "sim") : produtos.filter(produto => produto.tipo == tipo)
    let produtosFiltrados = produtos.filter(produto => produto.tipo == tipo)
    exibirProdutosNaTela(produtosFiltrados)
}

function goSobre() {
    window.location.href = "./sobre.html";
}