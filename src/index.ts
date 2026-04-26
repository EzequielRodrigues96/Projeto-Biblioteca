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

exibirBiblioteca();