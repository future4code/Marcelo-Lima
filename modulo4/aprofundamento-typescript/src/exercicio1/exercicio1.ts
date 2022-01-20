// Exercício 1
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
    // R: Irá da erro, pois ele não vai aceitar tipos number, apenas strings

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

type StringOrNumber = number | string

const variavel: StringOrNumber = 1

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

enum CorFavorita {
    AMARELO = 'Amarelo',
    AZUL = 'Azul',
    VERMELHO = 'Vermelho',
    VERDE = 'Verde'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}


const pessoa1: Pessoa = {
    nome: 'Marcelo',
    idade: 25,
    corFavorita: CorFavorita.AZUL
}
const pessoa2: Pessoa = {
    nome: 'Igor',
    idade: 35,
    corFavorita: CorFavorita.VERMELHO
}
const pessoa3: Pessoa = {
    nome: 'Pedro',
    idade: 30,
    corFavorita: CorFavorita.VERDE
}