const elementoLivros = document.getElementById('livros');
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis');

function exibirNaTela(listaDeLivros) {
    elementoValorTotal.innerHTML = '';
    elementoLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {
      let disponivel = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoLivros.innerHTML += `
        <div class="livro">
      <img class="${disponivel}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    });
}