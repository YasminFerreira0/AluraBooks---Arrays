function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return{...livros, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosComDesconto;
}
