let livros = []
const endpointDaAPI = 'app/produtos.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    // let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livros)
}
