const titulo: string[] = ['1984', 'Dom Casmurro','Sociedade do Casaço',
    'Noites Brancas'];

const autores: string[] = ["George Orwell", "Machado de Assis", "Byung-Chul Han",
    'Fiódor Dostoiévski'];

const anopublicacao: number[] = [1949,1899,2010,1848];
const numpaginas: number[] = [224,208,128,96];
const lido: boolean[] = [true, false, true, true];
const avaliacoes: number[] = [5,0,4];

titulo.forEach((titulo: string, indice: number) => {
    console.log(`${indice + 1}. ${titulo}`);
});
