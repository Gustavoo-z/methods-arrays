let btnOderdenar = document.getElementById('btnOrdenarPorPreco');
btnOderdenar.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirNaTela(livrosOrdenados);
}