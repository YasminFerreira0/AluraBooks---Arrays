let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivros();

async function getBuscaLivros (){
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}
