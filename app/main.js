let produtos = []
const endpointDaAPI = 'app/produtos.json'
getBuscarProdutosDaAPI()

async function getBuscarProdutosDaAPI() {
    const res = await fetch(endpointDaAPI)
    produtos = await res.json()
    exibirProdutosNaTela(produtos)
}
