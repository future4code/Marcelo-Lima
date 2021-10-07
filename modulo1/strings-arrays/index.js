//EXERCICIOS DE AULA3, MODULO 1
//STRINS E ARRAYS

//Exercícios de interpretação de código
//1-
// let array
// console.log('a. ', array)
// // //RESPOSTA: a. undefined //Não tem nenhuma atribuição de valor para a variável

// array = null
// console.log('b. ', array)
// // //RESPOSTA: b. null //Variável está "= null", logo vai ser impresso b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //RESPOSTA: c. 11 //O "length" mostra a quantidade de itens que existe na array

// let i = 0
// console.log('d. ', array[i])
// //RESPOSTA: d. 3 //Mostra-se o índice que a variável let i está pedindo

// array[i+1] = 19
// console.log('e. ', array)
// //RESPOSTA: e. [3, 19, 5, 6, , 7, 8, 9, 10, 11, 12, 13] //o "array[i+1]" fez com que ele trocasse o índice 1 por 19

// const valor = array[i+6]
// console.log('f. ', valor)
// //RESPOSTA: f. 9 //É selecionado a posição de índice 6

// //2-
// //frase = Subi num ônibus em Marrocos
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//RESPOSTA: SUBI NUM ÔNIBUS EM MIRROCOS 27


//----------------------------------------------------------------

//Exercícios de escrita de código

//1-Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// const perguntaEmail = prompt("Qual o seu e-mail?")
// const perguntaNome = prompt("Qual o seu nome?")
// console.log(`O e-mail ${perguntaEmail} foi cadastrado com sucesso. Seja bem vinda(o), ${perguntaNome}!`)

//----------------------------------------------------------------

//2-Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//a)Imprima no console o array completo
// const comidasPreferidas = ["Pizza", "kebab", "comida caseira", "churrasco", "sopa"]
// console.log(comidasPreferidas)

//----------------------------------------------------------------

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
// Consegui colocar cada comida uma embaixo da outra de duas formas, preferi a 2º forma po
//questão de formatação da página

   //1º forma a seguir
// const comidasPreferidas = ["Pizza", " kebab", " comida caseira", " churrasco", " sopa"]
// console.log(`Essas são as minhas comidas preferidas ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`)

   //2º forma a seguir
// const comidasPreferidas = ["Pizza", "kebab", "comida caseira", "churrasco", "sopa"]
// console.log("Essas são minhas comidas preferidas:")
// console.log(comidasPreferidas[0])
// console.log(comidasPreferidas[1])
// console.log(comidasPreferidas[2])
// console.log(comidasPreferidas[3])
// console.log(comidasPreferidas[4])

//----------------------------------------------------------------

// //c)Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
// const comidasPreferidas = ["Pizza", "kebab", "comida caseira", "churrasco", "sopa"]
// console.log(comidasPreferidas)
// const perguntaComidaUsuario = prompt("Qual sua comida preferida?")
// comidasPreferidas[1] = perguntaComidaUsuario
// console.log(comidasPreferidas)
//----------------------------------------------------------------

//3-Faça um programa, seguindo os passos:
// //a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// const listaDeTarefas = []

// //----------------------------------------------------------------

// // //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// const tarefa1 = prompt("Fale a primeira tarefa do dia")
// const tarefa2 = prompt("Fale a segunda tarefa do dia")
// const tarefa3 = prompt("Fale a terceira tarefa do dia")
// console.log(tarefa1, tarefa2, tarefa3)

// listaDeTarefas.push(tarefa1)
// listaDeTarefas.push(tarefa2)
// listaDeTarefas.push(tarefa3)

// //----------------------------------------------------------------

// // //c) Imprima o array no console
// console.log(listaDeTarefas) //(3) ['a', 'b', 'c']

// //----------------------------------------------------------------

// // //d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
// const taferaRealizada = prompt("Qual tafera você já realizou? 1, 2 ou 3")

// //----------------------------------------------------------------

// // //e) Remova da lista o item de índice que o usuário escolheu.
// const tarefaRealizadaEscolhida = taferaRealizada
// const tarefasRestantes = listaDeTarefas.splice(tarefaRealizadaEscolhida - 1, 1)

// //----------------------------------------------------------------

// // //f) Imprima o array no console
// console.log(listaDeTarefas)


//----------------------------------------------------------------


//DESAFIOS
//1 Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
// const frase = prompt("Escreva uma frase!")
// const fraseUser = frase
// const arrayFrase = fraseUser.split(" ")
// console.log(arrayFrase)

//----------------------------------------------------------------

//2 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`,
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indice = frutas.indexOf("Abacaxi")
console.log("Indice da palavra abacaxi:", indice)
console.log("tamanha da array:", frutas.length)
