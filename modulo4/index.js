
// Array que vai armazenar os livros
let estoque = [];

// Exemplo de como um livro será representado:
// {
//   titulo: "O Pequeno Príncipe",
//   autor: "Antoine de Saint-Exupéry",
//   quantidade: 5
// }
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe no estoque
    let livroExistente = estoque.find(livro => livro.titulo === titulo);
    
    if (livroExistente) {
        console.log(`O livro "${titulo}" já existe no estoque.`);
    } else {
        // Adiciona novo livro
        estoque.push({ titulo, autor, quantidade });
        console.log(`Livro "${titulo}" adicionado com sucesso!`);
    }
}
function atualizarQuantidade(titulo, novaQuantidade) {
    let livro = estoque.find(livro => livro.titulo === titulo);
    
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`Livro "${titulo}" não encontrado no estoque.`);
    }
}
function listarLivros() {
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
    } else {
        console.log("Livros no estoque:");
        estoque.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    }
}
