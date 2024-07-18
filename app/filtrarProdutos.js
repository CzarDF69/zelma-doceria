const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarProdutos));

function filtrarProdutos() {
    const elementoBtn = document.getElementById(this.id);
    const tipo = elementoBtn.value;
    let prodFiltrados = [];
    prodFiltrados = tipo == 'todos' ? produtos.filter(produto => produto.categoria != "todos") : produtos.filter(produto => produto.categoria == tipo);
    exibirProdutosNaTela(ordenarProdutos(prodFiltrados));
}

function ordenarProdutos(produtosSelecionados) {
    let prodOrdenados = produtosSelecionados.sort((a, b) => {
        const aValue = JSON.stringify(Object.values(a));
        const bValue = JSON.stringify(Object.values(b));
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
    });
    return prodOrdenados;
}
