livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosdaAPI()

async function getBuscarLivrosdaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros);
    exibirNaTela(livrosDesconto);
}