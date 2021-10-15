// Exercícios de interpretação de código

// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar 
// sobre o resultado. 



// 1. Leia o código abaixo



// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a) O que vai ser impresso no console?
// RESPOSTA: Irá aparecer cada item da array separadamente, seu índice na array e por fim mostrar toda a array completa




// 2. Leia o código abaixo



// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)


// a) O que vai ser impresso no console?
// RESPOSTA: Irá aparecer apenas o item "nome" de cada índice da array




// 3. Leia o código abaixo



// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)




// a) O que vai ser impresso no console?
// RESPOSTA: Irá aparecer apenas o array que estiver como diferente o apelido Chijo



//_____________________________________________________________________________________________________________________________________________



// Exercícios de escrita de código



// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções 
// de array map e filter:



// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]



// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const escolherApenasNomes = (item) => {
//     return item.nome
// }
// const nomesPets = pets.map(escolherApenasNomes)
// console.log(nomesPets)



// b) Crie um novo array apenas com os cachorros salsicha

// const escolherSalsicha = (item) => {
//     if(item.raca === "Salsicha"){
//         return item
//     }
// }
// const racaSalsicha = pets.filter(escolherSalsicha)
// console.log(racaSalsicha)



// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de 
// desconto de 10% para tosar o/a [NOME]!"

// const escolherPoodle = (item) => {
//     if(item.raca === "Poodle") {
//         console.log("Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome)
//     }
// }

// const cumpoDesconto = pets.filter(escolherPoodle)
// console.log(cumpoDesconto)

//---------------------------------------------------------------------------------------------------------------------------------------------



// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]



// a) Crie um novo array que contenha apenas o nome de cada item

// const imprimirNomes = (item) => {
//     return item.nome
// }
// const listaApenasNomes = produtos.map(imprimirNomes)
// console.log(listaApenasNomes)



// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const colocarDesconto = (item) => {
//     item.preco = item.preco - item.preco * 5 /100
//     return item
// }
// const precosComDescontos = produtos.map(colocarDesconto)
// console.log(precosComDescontos)



// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const listarApenasBebidas = (item) => {
//     if(item.categoria === "Bebidas") {
//         return item
//     }
// }
// const listaBebidas = produtos.filter(listarApenasBebidas)
// console.log(listaBebidas)



// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const listarApenasYpe = (item) => {
//     if(item.nome.includes("Ypê")) {
//         return item
//     }
// }
// const listaYpe = produtos.filter(listarApenasYpe)
// console.log(listaYpe)

// Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha 
// a palavra "Ypê"

// const transformarFrase = (item) => {
//     return `Compre ${item.nome} por ${item.preco}`
// }

// const novaFrase = produtos.filter(listarApenasYpe).map(transformarFrase)
// console.log(novaFrase)

//_____________________________________________________________________________________________________________________________________________

// DESAFIOS

// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//  ]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

// const listarNomesPokemons = (item) => {
//     return item.nome
// }

// const nomesPokemons = pokemons.map(listarNomesPokemons)
// nomesPokemons.sort()
// console.log(nomesPokemons)

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

//  const listaSemRepeticoes = new Map()

//  pokemons.forEach((item) => {
//      if(!listaSemRepeticoes.has(item.tipo)) {
//          listaSemRepeticoes.set(item.tipo, item)
//      }
//  })
//  console.log([...listaSemRepeticoes.values()])