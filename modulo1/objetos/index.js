// Exercícios de interpretação de código
// 1.

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// RESPOSTA: 
// Matheus Nachtergaele
// Virginia Cavendish
// canal: Globo, horario: 14h

// 2. Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// RESPOSTA: 
// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// RESPOSTA: ela cópia o objeto escolhido

// 3. Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
//RESPOSTA: 
// false
// underfined

//______________________________________________________________________________________________________________________________

// Exercícios de escrita de código
// 1. Resolva os passos a seguir:
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre 
// terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime 
// uma mensagem no modelo abaixo: 

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }

//  function imprimir (pessoa) {
//      const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`
//      console.log(frase)
     
//  }
//  const eu = {
//     nome: "Marcelo", 
//     apelidos: ["Chelus", "Celo", "Má"]
//  }
//  imprimir(eu)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma 
// nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novosApelidos = {
//     ...pessoa, 
//     apelidos: ["Dinha", "Andinha", "Manda"]
//  }
// imprimir(novosApelidos)

//-------------------------------------------------------------------------------------------------------------------------------

// 2. Resolva os passos a seguir

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const pessoa1 = {
//     nome: "Gilberto",
//     idade: 25,
//     profissao: "jornalista"
// }
// const pessoa2 = {
//     nome: "Vinicius",
//     idade: 54,
//     profissao: "motorista"
// }

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//  1. O valor de "nome"
//  2. O numero de caracteres do valor "nome"
//  3. O valor de "idade"
//  4. O valor de "profissão"
//  5. O numero de caracteres do valor "profissão"

// function retornarArray (pessoa) {
//     const informacoes = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
//     return informacoes
// }
// retornarArray(pessoa1)
// retornarArray(pessoa2)

//-------------------------------------------------------------------------------------------------------------------------------

// 3. Resolva os passos a seguir:

// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

// const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e 
// disponibilidade (boolean - devem começar como true)

// const fruta1 = {
//     nome: "maçã",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "banana",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "mamão",
//     disponibilidade: true
// }

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função 
// passando os três objetos criados.

// function colocarNoCarrinho (fruta) {
//     carrinho.push(fruta)
// } 
// colocarNoCarrinho(fruta1)
// colocarNoCarrinho(fruta2)
// colocarNoCarrinho(fruta3)

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.

// console.log(carrinho)

//______________________________________________________________________________________________________________________________

// DESAFIOS 

// 1. Crie uma função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas
// propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// function perguntarInfos() {
//     const infos = []
//     infos[0] = prompt("Qual o seu nome?")
//     infos[1] = Number(prompt("Qual a sua idade?"))
//     infos[2] = prompt("Qual a sua profissão?")
//     return infos
// }
// const infos = perguntarInfos()
// const objetoInfos = {
//     nome: infos[0],
//     idade: infos[1],
//     profissao: infos[2]
// }
// console.log(objetoInfos)
// console.log(typeof(objetoInfos))

//-------------------------------------------------------------------------------------------------------------------------------

//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. 
// A função deve retornar uma mensagem no seguinte modelo:

// const filme1 = {
//     anoLancamento: 2014,
//     nome: "interestelar"
// }
// const filme2 = {
//     anoLancamento: 2010,
//     nome: "A origem"
// }
// function compararFilmes (filme1, filme2) {
//     const antesDepois = filme1.anoLancamento < filme2.anoLancamento
//     const mesmoAno = filme1.anoLancamento === filme2.anoLancamento
//     console.log("O primeiro filmes foi lançado antes do segundo? " + antesDepois)
//     console.log("O primeiro filmes foi lançado no mesmo ano do segundo? " + mesmoAno)
    
// }
// compararFilmes(filme1, filme2)

//-------------------------------------------------------------------------------------------------------------------------------

// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela 
// deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido.

const carrinho = []
const fruta1 = {
    nome: "maçã",
    disponibilidade: true
}
const fruta2 = {
    nome: "banana",
    disponibilidade: true
}
const fruta3 = {
    nome: "mamão",
    disponibilidade: true
}
const fruta4 = {
    nome: "Manga",
    disponibilidade: false
}

function colocarNoCarrinho (fruta) {
    carrinho.push(fruta)
} 
function imprimirDisponibilidade (fruta) {
    const disponibilidade = {
        ...fruta4,
        disponibilidade: !fruta.disponibilidade
    }
    return disponibilidade
}
colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)
console.log(carrinho)
console.log(imprimirDisponibilidade(fruta4))