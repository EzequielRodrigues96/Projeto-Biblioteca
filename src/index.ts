const titulo: string[] = []
const autores: string[] = [];
const anopublicacao: number[] = [];
const numpaginas: number[] = [];
const lido: boolean[] = [];
const nota: number[] = [];

titulo.push('1984',
    'Dom Casmurro',
    'Sociedade do Cansaço',
    'Noites Brancas',
    'Harry Potter e a Pedra Filosofal',
    'Harry Potter e a Câmara Secreta',
    'Harry Potter e o Prisioneiro de Azkaban',
    'O Morro dos Ventos Uivantes',
    'O Diário de Anne Frank',
    'Memórias do Subsolo',
    'A Revolução dos Bichos',
    'A Morte de Ivan Ilitch',
)

autores.push(
    "George Orwell",
    "Machado de Assis",
    "Byung-Chul Han",
    "Fiódor Dostoiévsk",
    "J.K. Rowling",
    "J.K. Rowling",
    "J.K. Rowling",
    "Emily Brontë",
    "Anne Frank",
    "Fiódor Dostoiévsk",
    "George Orwell",
    "Liev Tolstói"
)

anopublicacao.push(1949,1899,2010,1848,1997,1998,1999,1847,1947,1864,1945,1886)
numpaginas.push(224,208,128,96,210,224,288,368,192,192,96,80)
lido.push(true, false, true, true,true,true,false,true,true,true,true,true)
nota.push(5,0,4,5,5,5,0,2,4,4,5,5)

function exibirBiblioteca(){
    console.log("\n===== MINHA BIBLIOTECA =====\n")
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
function removerLivro(nomeLivro: string): void {
    console.log("\n===== REMOVER LIVRO =====\n")
    const posicaoLivro: number = titulo.findIndex((titulo) => titulo === nomeLivro);
    if(posicaoLivro === -1){
        console.log(`Livro ${nomeLivro} não encontrado!`)
        return;
    }else{
        console.log(`Livro "${nomeLivro}" removido da biblioteca!`)
        titulo.splice(posicaoLivro, 1);
        autores.splice(posicaoLivro, 1);
        anopublicacao.splice(posicaoLivro, 1);
        numpaginas.splice(posicaoLivro, 1);
        lido.splice(posicaoLivro, 1);
        nota.splice(posicaoLivro, 1);
    }
}
function buscarPorTitulo(livroPesquisado: string){
    console.log("\n===== PESQUISA POR TÍTULO =====")
    const possuiLivro: boolean = titulo.includes(livroPesquisado);
    possuiLivro ? console.log("\nLivro encontrado!\n") : console.log("\nLivro não encontrado ou título digitado incorretamente!\n");
}
function listarPorAutor(autorPesquisado: string): void {
    console.log("\n===== LISTA POR AUTOR PESQUISADO =====\n")
    const livrosDoAutor = titulo.map((titulo, indice) =>  ({
        autor: autores[indice],
        tituloLivro: titulo,
        lido: lido[indice]
    })).filter((livro) => livro.autor === autorPesquisado);
    
    if(livrosDoAutor.length === 0){
        console.log(`Nehum livro de ${autorPesquisado} encontrado!`)
    }

    else console.log(`Livros de ${autorPesquisado}:`)
    livrosDoAutor.forEach((livro, indice) =>{
        const status: string = livro.lido ? 'LIDO' : 'PENDENTE'
        console.log(`${indice + 1} - "${livro.tituloLivro}" - ${status}`)
    })
}
function marcarComoLido(tituloLivro: string, aplicarNota:number): void {
    console.log("\n===== MARCAR COMO LIDO=====\n")
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
            console.log(`Livro "${tituloLivro}" marcado como lido e nota ${aplicarNota} aplicada!\n`)
           }

        }
    }

}
function ListarLidos(): void {
    console.log("\n===== LEITURAS FINALIDAS =====\n")
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
    console.log("\n===== LISTA DE LEITURAS PENDENTES =====\n")
    const leiturasPendentes = lido.map((statusLido, indice) => ({
         autor: autores[indice],
         tituloLivro: titulo[indice],
         lido: statusLido,
    })).filter((livro) => livro.lido === false);

    if(leiturasPendentes.length === 0){
        console.log('Você já leu toda sua biblioteca, hora de adquirir mais livros!')
    }
    else{
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
    console.log("\n===== ESTATISTICAS NERD =====\n")
    console.log(`Total de livros na biblioteca: ${totalLivros()}`)
    console.log(`Total de livros lidos da biblioteca: ${totalLidos()}`)
    console.log(`Percentual de livros lido da biblioteca: ${percentualLidos()}%.`)
    console.log(`A media das avaliações é : ${mediaAvaliacoes()}.`)
    console.log(`Total de páginas lidas: ${totalPaginasLidas()}.`)
}
function exibirPorDecada(): void {
    console.log("\n===== EXIBINDO BIBLIOTECA POR DÉCADA =====\n ")
    const livrosPorDecada = titulo.map((titulo, indice) => ({
        titulo: titulo,
        ano: anopublicacao[indice]!
    }));
    const livrosAgrupadosPorDecada: { [decada: string]: { titulo: string; ano: number }[] } = {};
    livrosPorDecada.forEach((livro) => {
        const decada = Math.floor(livro.ano / 10) * 10;
        if (!livrosAgrupadosPorDecada[decada]) {
            livrosAgrupadosPorDecada[decada] = [];
        }
        livrosAgrupadosPorDecada[decada].push(livro);
    });
    for (const [decada, livros] of Object.entries(livrosAgrupadosPorDecada)) {
        const titulos = livros.map((livro) => `"${livro.titulo}"`).join(', ');
        console.log(`${decada}s: ${titulos}`);
    }
}//nessa função usei bastante o axulio do copilot, gastando quase todos os tokens de chat, mas entendi a lógica toda e deu certo no fim

adicionarLivro('O Livro que você gostaria que seus pais tivessem lido','Philippa Perry',2019,294,true,4 );
adicionarLivro('Orgulho e Preconceito','Jane Austen',1813,336,true,5);
//removerLivro("1984"); //deixei comentado a função de remover livro pq 1984 não merece ser removido, mas funciona!
exibirBiblioteca();
buscarPorTitulo('1984');
listarPorAutor('Fiódor Dostoiévsk');
//marcarComoLido('Dom Casmurro',5);
ListarLidos();
listarLeiturasPendentes();
exibirEstatisticas();
exibirPorDecada();