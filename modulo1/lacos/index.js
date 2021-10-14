// Exercícios de interpretação de código

// O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//RESPOSTA: aparecerá: 10

// 2. Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// RESPOSTA: aparecerá apenas os números maiores que 18

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// RESPOSTA: só retirar o if e colocar o console.log(numero)

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

 // RESPOSTA: não soube responder

 //_________________________________________________________________________________________________________________________________________________________

 // Exercícios de escrita de código

 // 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// const bichos = Number(prompt("Quantos bichos de estimação você tem?"))
// const nomesBichos = []
// if (bichos === 0 ) {
//     console.log("Que pena! Você pode adotar um pet!")
// } else {
// for(let i = 0; i < bichos; i++) {
//     nomesBichos.push(prompt("Digite o nome de um dos bichinhos!")) 
//     } 
//     console.log(nomesBichos)
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para 
// cada um dos itens abaixo, realizando as operações pedidas:

// const arrayOrig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// for(let num of arrayOrig){
//     console.log(num)
// }

// for(let i = 0; i < arrayOrig.length; i++) {
//     console.log(arrayOrig[i])
// }

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// for(let num of arrayOrig) {
//     console.log(num / 10)
// }

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// const novoArray = []
// for(let num of arrayOrig) {
//     if(num % 2 === 0){
//         novoArray.push(num)
//     }
// }
// console.log(novoArray)

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este 
// novo array.

// const novoArray = []
// for(let i=0; i < arrayOrig.length; i++){
//     novoArray.push(`O elemento do índice ${i} é ${arrayOrig[i]}`)
// }
// console.log(novoArray)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no ar

// Acabei fazendo de dois modos por achar que o primeiro não funcionava e depois vi que era só um erro de sintaxe

// modo 1

// let maior = 0
// for(let i = 0; i < arrayOrig.length; i++){
//     if(arrayOrig[i] > maior) {
//         maior = arrayOrig[i]
//     }
// }

// let menor = 99
// for(let i = 0; i < arrayOrig;){
//     if(arrayOrig[i] > menor) {
//         menor = arrayOrig[i]
//     }
// }

// console.log(maior)
// console.log(menor)

// modo 2

// function descobrirMaiorMenor (array){
//     let maior = 0
//     let menor =99
//     for (let i = 0; i< arrayOrig.length; i++) {
//         if(array[i] > maior)
//         maior = array[i]
//         if(array[i] < menor)
//         menor = array[i]
//     }
//     console.log(`O maior valor é: ${maior}`)
//     console.log(`O menor valor é: ${menor}`)
// }
// descobrirMaiorMenor(arrayOrig)
//_________________________________________________________________________________________________________________________________________________________

// DESAFIOS

// 1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.

// Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma 
// tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o 
// chute em si. Veja, abaixo, um exemplo de partida:

// let numeroPensado = Number(prompt("Digite um número!"))
// let numeroChutado = Number(prompt("Digite o número que você acha que a outra pessoa pensou!"))


// while(numeroChutado !== numeroPensado) {
//     let diferenca
//     if (numeroChutado > numeroPensado){
//         diferenca = "menor"
//     } else {
//         diferenca = "maior"
//     }
//     console.log(`Errrrrrrrou, é ${diferenca}`)
//     numeroChutado = Number(prompt("Digite outro número"))
// }