//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO   05/10/21

// 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) REPOSTA: FALSE, por ser "&&"

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) RESPOTA: FALSE, por ser "&&"

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) REPOSTA: TRUE, por ser "||""

// console.log("d. ", typeof resultado) REPOSTA: BOLLEAN, por ter o "typeof"



// 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//RESPOTA: primeiroNumero e segundoNumero estão como sting, logo será impresso no console
//o resultado "55", se quisermos que o resultado dê "10" precisamos converter para numero.



//3 
//REPOSTA:
//se quisermos que o resultado dê "10" precisamos converter para numero,
//assim usamos como o exemplo a seguir: const soma = Number(primeiroNumero) + Number(segundoNumero)



//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1
// const idadeUsuario = prompt("Qual a sua idade?")
// const idadeBfUsuario = prompt("Qual a idade de seu melhor amigo(a)?")
// const idadeUsuarioNumber = Number(idadeUsuario)
// const idadeBfUsuarioNumber = Number(idadeBfUsuario)

// console.log("Sua idade:", idadeUsuarioNumber, "anos")
// console.log("Idade do seu melhor amigo(a):", idadeBfUsuarioNumber, "anos")
// console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeUsuarioNumber > idadeBfUsuarioNumber)

// let diferencaIdade = (idadeUsuarioNumber) - (idadeBfUsuarioNumber)

// console.log("A diferença de idade entre vocês é de", diferencaIdade, "anos")



//2
// const numeroPar = prompt("Digite um número par!")

// console.log(Number(numeroPar) % 2)
//RESPOSTA c) O resultado da divisão sempre será "0"
//RESPOSTA d) O resultado da divisão sempre será "1"



//3
// const idade = prompt("Qual a sua idade em anos?")
// const idadeAtual = Number(idade)

// console.log("Você tem", idadeAtual, "anos de vida!")
// console.log("Você tem", idadeAtual * 12,"meses de vida!")
// console.log("Você tem", idadeAtual * 365, "dias de vida!")
// console.log("Você tem", idadeAtual * 8760, "horas de vida!")



//4
// const primeiroNumero = prompt("Digite um número!")
// const segundoNumero = prompt("Digite outro número!")
// const primeiroNumeroNumber = Number(primeiroNumero)
// const segundoNumeroNumber = Number(segundoNumero)

// console.log("Primeiro número:", primeiroNumeroNumber)
// console.log("Segundo número:", segundoNumeroNumber)
// console.log("O primeiro número é maior que o segundo?", primeiroNumeroNumber > segundoNumeroNumber)
// console.log("O primeiro número é igual ao segundo?", primeiroNumeroNumber === segundoNumeroNumber)
// console.log("O primeiro número é divisível pelo segundo?", (primeiroNumeroNumber % segundoNumeroNumber) === 0)
// console.log("O segundo número é divisível pelo primeiro?", (segundoNumeroNumber % primeiroNumeroNumber) < 1)