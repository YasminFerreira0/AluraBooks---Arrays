function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.retuce((acc, livro) => acc + livro.preco, 0,)
}