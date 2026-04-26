const titulo: string[] = []
const autores: string[] = [];
const anopublicacao: number[] = [];
const numpaginas: number[] = [];
const lido: boolean[] = [];
const nota: number[] = [];

titulo.push('1984',
    'Dom Casmurro',
    'Sociedade do Cansaço',
    'Noites Brancas'
    )

autores.push(
    "George Orwell",
    "Machado de Assis",
    "Byung-Chul Han",
    "Fiódor Dostoiévsk"
)

anopublicacao.push(1949,1899,2010,1848)
numpaginas.push(224,208,128,96)
lido.push(true, false, true, true)
nota.push(5,0,4,5)

function exibirBiblioteca(){
titulo.forEach((titulo: string, indice: number,) => {
    const status = lido[indice] ? 'LIDO'  : 'PENDENTE';
    const notao: string = nota[indice] > 0 ? `${nota[indice]}/5` : 'SEM NOTA'
    console.log(`${indice + 1} - "${titulo}" - ${autores[indice]} - (${anopublicacao[indice]}) - ${numpaginas[indice]} páginas - ${status}- Nota: ${notao}`);
});
}

function adicionarLivro(
    novoLivro: string,
    novoAutor: string,
    novoAnoPublicacao: number,
    novoNumPaginas: number,
    novoLido: boolean,
    novaNota: number,
){
    if(novoAnoPublicacao <= 0 || novoNumPaginas <=0){
        console.log('Digite um valor maior que 0!')
        return;
    }
    titulo.push(novoLivro);
    autores.push(novoAutor);
    anopublicacao.push(novoAnoPublicacao);
    numpaginas.push(novoNumPaginas);
    lido.push(novoLido);
    nota.push(novaNota);
}

function removerLivro(){
    titulo.shift();
    autores.shift();
    anopublicacao.shift();
    numpaginas.shift();
    lido.shift();
    nota.shift();
}

adicionarLivro('O Livro que você gostaria que seus pais tivessem lido','Philippa Perry',2019,294,true,4 );
adicionarLivro('Orgulho e Preconceito','Jane Austen',1813,336,true,5);
//removerLivro(); //deixei comentado a função de remover livro pq 1984 não merece ser removido, mas funciona!
exibirBiblioteca();