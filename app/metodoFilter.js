const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
btnFiltrarLivrosDeFront.addEventListener('click', filtrasLivrosDeFront);

function filtrasLivrosDeFront (){
    let livrosFiltrados = livros.filter(livros => livros.categoria == 'front-end');
    console.table(livrosFiltrados);
}