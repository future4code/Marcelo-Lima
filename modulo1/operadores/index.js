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



//DESAFIOS
//1

//a)
// let fahrenheit = 77
// let kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log(kelvin)
//RESPOSTA: 298.15

//b)
// let celsius = 80
// let fahrenheit = celsius * (9/5) + 32
// console.log(fahrenheit)
//RESPOTA: 176

//c)
// let celsius = 30
// let fahrenheit = celsius * (9/5) + 32
// let kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log(fahrenheit)
// console.log(kelvin)
//RESPOSTA: 86 fahrenheit, 303.15 kelvin

//d)
//REPOSTA:
// let celsius = prompt("Qual valor você deseja converter?")
// let fahrenheit = celsius * (9/5) + 32
// let kelvin = (fahrenheit - 32)*(5/9) + 273.15
// console.log(fahrenheit)
// console.log(kelvin)


//2

// let valorQuiloWattHora = 0.05
// let consumoQuiloWattHora = valorQuiloWattHora * 280
// console.log(consumoQuiloWattHora)
//RESPOSTA: a) R$14,00 a ser pago
// console.log(consumoQuiloWattHora * 0.85)
//REPOSTA b) com desconto passa a ser R$11,90


//3
//REPOSTA a)
// let libra = 20
// let kilo = libra * 0.453592
// console.log("20lb equivalem a", kilo, "kg")
//RESPOSTA: 20lb equivalem a 9.07184 kg

//RESPOSTA b)
// let oz = 10.5
// let kilo = oz * 0.0283495
// console.log("10.5oz equivalem a", kilo, "kg")
// RESPOSTA: 10.5oz equivalem a 0.29766975 kg

//RESPOSTA c)
// let milha = 100
// let metro = milha * 1609.34
// console.log("100mi equivalem a", metro, "m")
//RESPOSTA: 100mi equivalem a 160934 m

//RESPOSTA d)
// let pes = 50
// let metro = pes * 0.3048
// console.log("50ft equivalem a", metro, "m")
//REPOSTA: 50ft equivalem a 15.24 m

//RESPOSTA e)
// let galao = 103.56
// let litro = galao * 3.78541
// console.log("103.56gal equivalem a", litro, "l")
//RESPOSTA: 103.56gal equivalem a 392.01705960000004 l

//RESPOSTA f)
// let xicara = 450
// let litro = xicara * 0.284131
// console.log("450xic equivalem a", litro, "l")
//RESPOSTA: 450xic equivalem a 127.85895000000001 l

//RESPOSTA g)
// let libra = prompt("Digite uma quantidade!")
// let kilo = libra * 0.453592
// console.log("20lb equivalem a", kilo, "kg")