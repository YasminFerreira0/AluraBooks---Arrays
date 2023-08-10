/*const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);*/

const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros (){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livros => livros.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}
