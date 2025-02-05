livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosdaAPI()

const elementoLivros = document.getElementById('livros');

async function getBuscarLivrosdaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros);
    exibirNaTela(livros);
}

function exibirNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    });
}