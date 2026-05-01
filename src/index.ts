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
    const notao: string = nota[indice]! > 0 ? `${nota[indice]}/5` : 'SEM NOTA'
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
function buscarPorTitulo(livroPesquisado: string){
    const possuiLivro: boolean = titulo.includes(livroPesquisado);
    possuiLivro ? console.log("\nLivro encontrado!") : console.log("\nLivro não encontrado ou título digitado incorretamente!");
}
function listarPorAutor(autorPesquisado: string): void {
    const livrosDoAutor = titulo.map((titulo, indice) =>  ({
        autor: autores[indice],
        tituloLivro: titulo,
        lido: lido[indice]
    })).filter((livro) => livro.autor === autorPesquisado);
    
    if(livrosDoAutor.length === 0){
        console.log(`Nehum livro de ${autorPesquisado} encontrado!`)
    }

    else console.log(`\nLivros de ${autorPesquisado}:`)
    livrosDoAutor.forEach((livro, indice) =>{
        const status: string = livro.lido ? 'LIDO\n' : 'PENDENTE\n'
        console.log(`${indice + 1} - "${livro.tituloLivro}" - ${status}`)
    })
}
function marcarComoLido(tituloLivro: string, aplicarNota:number): void {
    const posicaoLivro:number = titulo.findIndex((titulo) => titulo === tituloLivro);
    if(posicaoLivro === -1){
        console.log (`Livro ${tituloLivro} não encontrado. \n`)
        return;
    }
    else {
        if (lido[posicaoLivro] === true){
            console.log("Você já leu esse livro!")
            return;
        }
        else {
           if(aplicarNota < 1){
            console.log("Digite uma nota válida!")
            return;
           }
           else{
            lido[posicaoLivro] = true;
            nota[posicaoLivro] = aplicarNota;
            console.log(`Livro "${tituloLivro}" marcado como lido e nota ${aplicarNota} aplicada!`)
           }

        }
    }

}
function ListarLidos(): void {
    const livrosLidos = lido.map((statusLido, indice) => ({
        autor: autores[indice],
        tituloLivro: titulo[indice],
        nota: nota[indice],
        lido: statusLido,
    })).filter((livro) => livro.lido === true);

    if(livrosLidos.length === 0){
        console.log("Você não leu nenhum livro... Vamos melhorar isso?")
    }
    else{console.log('Lsita dos livros que já foram lidos:')
        livrosLidos.forEach((livro, indice) =>{
            console.log(`${indice + 1} - ${livro.tituloLivro} - Nota: ${livro.nota}/5.`)
        })
    
    }
}
function listarLeiturasPendentes(): void {
    const leiturasPendentes = lido.map((statusLido, indice) => ({
         autor: autores[indice],
         tituloLivro: titulo[indice],
         lido: statusLido,
    })).filter((livro) => livro.lido === false);

    if(leiturasPendentes.length === 0){
        console.log('Você já leu toda sua biblioteca, hora de adquirir mais livros!')
    }
    else{
        console.log('Lista de leituras pendentes:')
        leiturasPendentes.forEach((livro,indice) => {
            console.log(`${indice +1}. ${livro.tituloLivro} - ${livro.autor}`)
        })
    }

}
function totalLivros(): number{
    const numLivros:number = titulo.length;
    return numLivros
}
function totalLidos(): number{
    const numLidos: number = lido.filter((status) => status === true).length;
    return numLidos;
}
function percentualLidos(): string{
    const porctLidos: number = (totalLidos() / totalLivros()) * 100
    const porctLidos2Casas:string = porctLidos.toFixed(2)
    return porctLidos2Casas;
}
function mediaAvaliacoes(): string{
    const avaliacoes:number [] = nota.filter((avaliacao) => avaliacao > 0)
    const somaAvaliacoes: number = avaliacoes.reduce((acumulador, atual) => acumulador + atual, 0)
    const mediaNotas: number = somaAvaliacoes / avaliacoes.length;
    const media: string = mediaNotas.toFixed(2)
    return media;
}
function totalPaginasLidas(): number{
    const livrosLidos = lido.map((status, indice) => ({
        numPaginas: numpaginas[indice],
        lido: lido[indice],
    })).filter ((livro) => livro.lido === true)

    const totalPaginas: number = livrosLidos.reduce((acumulador,livro) => acumulador + (livro.numPaginas ?? 0), 0);
    return totalPaginas;
}
function exibirEstatisticas(): void {
    console.log(`Total de livros na biblioteca: ${totalLivros()}`)
    console.log(`Total de livros lidos da biblioteca: ${totalLidos()}`)
    console.log(`Percentual de livros lido da biblioteca: ${percentualLidos()}%.`)
    console.log(`A media das avaliações é : ${mediaAvaliacoes()}.`)
    console.log(`Total de páginas lidas: ${totalPaginasLidas()}.`)
}

adicionarLivro('O Livro que você gostaria que seus pais tivessem lido','Philippa Perry',2019,294,true,4 );
adicionarLivro('Orgulho e Preconceito','Jane Austen',1813,336,true,5);
//removerLivro(); //deixei comentado a função de remover livro pq 1984 não merece ser removido, mas funciona!
exibirBiblioteca();
//buscarPorTitulo('1984');
//listarPorAutor('Jane Austen');
//marcarComoLido('Dom Casmurro',5);
//ListarLidos();
//istarLeiturasPendentes();
exibirEstatisticas();