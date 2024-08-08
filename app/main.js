let produtos = [];
const endpointAPI = 'app/produtos.json';
getBuscarProdutosAPI();

async function getBuscarProdutosAPI() {
    const res = await fetch(endpointAPI);
    produtos = await res.json();
    exibirProdutosNaTela(ordenarProdutos(produtos));
}
