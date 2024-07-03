let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.toSorted((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}