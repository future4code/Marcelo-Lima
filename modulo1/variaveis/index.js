//Exercícios de interpretação de código

//QUESTÃO 1:
//RESPOSTA
//  10
//  10 5 
// como não foi feita a conversão para número, ele não faz a soma mas concatena os valores



//QUESTÃO 2:
//REPOSTA
// 10
// 10
// 20
// como está sendo usado o "let", o valor que vem depois é o que sobressai



//QUESTÃO 3:
//RESPOSTA
//1 jornadaDeTrabalhoDiaria
//2 rendaDiaria
//3 voceRecebe    porHora


// EXERCÍCIO DE ESCRITA DE CÓDIGO

let nome;
let idade;
console.log(typeof nome)
console.log(typeof idade)

//os dois foram descritos como underfined, pois não possuem valor

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")
idade = Number(idade)
console.log(typeof nome)
console.log(typeof idade)

//recebi uma mensagem de erro (Uncaught TypeError: Assignment to constant variable.
//at index.js:36), então mudei a variável "const" para "let"
//aproveitei e fiz a converção de idade para número.

console.log("Olá!", nome, "você tem", idade, "anos")

 
const pergunta1 = ("Você está com fome?")
const pergunta2 = ("Está tudo bem?")
const pergunta3 = ("Já tomou banho?")
const resposta1 = "Não"
const resposta2 = "Sim"
const resposta3 = "Sim"
console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

let a = 10
let b = 25
let c = 0
console.log("O valor de a é", a)
console.log("O valor de b é", b)
c = a
a = b
b = c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", c)