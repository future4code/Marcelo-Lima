// Exercícios de interpretação de código
// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// a) O que vai ser impresso no console?
// Resposta: 10
//           50

// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e 
// minhaFuncao(10)? O que apareceria no console?
// Resposta: Não aparecerá nada, já que a função do console.log é mostrar no console

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Explique o que essa função faz e qual é sua utilidade
// Resposta: A função transforma toda a frase em caracteres minusculos e te mostra se tem a palavra cenoura
// por true or false

// b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:

// i.   Eu gosto de cenoura        //Resposta: eu gosto de cenoura       //true
// ii.  CENOURA é bom pra vista    //Resposta: cenoura é bom pra vista   //true
// iii. Cenouras crescem na terra  //Resposta: cenouras crescem na terra //true

//___________________________________________________________________________________________________________

// Exercícios de escrita de código

// 1. Escreva as funções explicadas abaixo



// a)Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//   Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// function mostrarInformacoes() {
//     console.log("Eu sou Marcelo, tenho 22 anos, moro na Paraíba e sou estudante")
// }
// mostrarInformacoes()

//-----------------------------------------------------------------------------------------------------------

// b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome 
//(string), a idade (number), a cidade (string) e uma profissão (string). la deve retornar uma string que 
//unifique todas as informações da pessoa em uma só mensagem com o template:

// const informacoes = ["Marcelo", 22, "João Pessoa", "estudante"]

// function mostrarFrase() {
//     frase = (`Eu sou ${informacoes[0]}, tenho ${informacoes[1]} anos, moro em ${informacoes[2]} e sou ${informacoes[3]}`)
//     return frase
// }
// console.log(mostrarFrase())

//-----------------------------------------------------------------------------------------------------------

// 2. Escreva as funções explicadas abaixo:


// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
//entradas e retorne o resultado. Invoque a função e imprima no console o resultado

// function somar(numeroA, numeroB) {
//     const somar = numeroA + numeroB
//     return somar
// }
// const resultado = somar(2, 2)
// console.log(resultado)

//-----------------------------------------------------------------------------------------------------------

// b)b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é 
//maior ou igual ao segundo.

// function comparar(numeroA, numeroB) {
//     const comparando = (numeroA >= numeroB)
//     return comparando
// }
// const resultado = comparar(31, 4)
// console.log(resultado)

//-----------------------------------------------------------------------------------------------------------

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function indicarTrueOrFalse() {
//     const parOuImpar = (Number(prompt("Digite um número!")) % 2 === 0)
//     return parOuImpar
// }
// const resultado = indicarTrueOrFalse()
// console.log(resultado)

//-----------------------------------------------------------------------------------------------------------

// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

// MODELO 1

// function imprimirFrase() {
//     const fraseUser = prompt("Digite uma frase!")
//     return fraseUser
// }
// const resultado = imprimirFrase()
// console.log(resultado.length)
// console.log(resultado.toLowerCase())

// MODELO 2

// function imprimirFrase() {
//     const fraseUser = prompt("Digite uma frase!")
//     const frase = (fraseUser.length)
//     const frase1 = fraseUser.toUpperCase()
//     return [frase, frase1]
// }
// const resultado = imprimirFrase()
// console.log(resultado[0])
// console.log(resultado[1])

//-----------------------------------------------------------------------------------------------------------

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
//inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// const numeroA = Number(prompt("Digite um número!"))
// const numeroB = Number(prompt("Digite um número!"))
// console.log(`Números inseridos: ${numeroA} e ${numeroB}`)

// function somar(numeroA, numeroB) {
//     const somar = numeroA + numeroB
//     return somar
// }
// const resultadoSoma = somar(numeroA, numeroB)

// function subtrair(numeroA, numeroB) {
//     const subtrair = numeroA - numeroB
//     return subtrair
// }
// const resultadoSubtracao = subtrair(numeroA, numeroB)

// function multiplicar(numeroA, numeroB) {
//     const multiplicar = numeroA * numeroB
//     return multiplicar
// }
// const resultadoMultiplicacao = multiplicar(numeroA, numeroB)

// function dividir(numeroA, numeroB) {
//     const dividir = numeroA / numeroB
//     return dividir
// }
// const resultadoDivisao = dividir(numeroA, numeroB)

// console.log(`Soma: ${resultadoSoma}`)
// console.log(`Diferença: ${resultadoSubtracao}`)
// console.log(`Multiplicação: ${resultadoMultiplicacao}`)
// console.log(`Divisão: ${resultadoDivisao}`)

//___________________________________________________________________________________________________________

//DESAFIOS
// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez
//ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções 
//também. Sua tarefa é escrever duas funções.

//a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

// const escreverParametro = (parametro) =>{
//     console.log(parametro)
// }

//b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre
// esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

// const somarSemRetorno = () => {
//     const soma = numeroA + numeroB
//     escreverParametro(soma) // Obs: a function somarSemRetorno usou o console.log da function 1
// }
// const numeroA = Number(prompt("Digite um número!"))
// const numeroB = Number(prompt("Digite um número!"))
// somarSemRetorno(numeroA, numeroB)

//-----------------------------------------------------------------------------------------------------------

// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. 
//Retorne este valor, invoque a função e imprima o resultado no console.

//MODELO 1 obs: não entendi direito como funciona o **(1/2)
// function calcular (num1, num2) {
//     const cateto1 = Number(prompt("Digite um numero!"))
//     const cateto2 = Number(prompt("Digite um numero!"))
//     const cateto3 = (cateto1 * cateto1) + (cateto2 * cateto2)
//     const hipotenusa = cateto3**(1/2)
//     console.log(hipotenusa)
// }
// calcular()

//MODELO 2
// function calcular () {
//     const cateto1 = Number(prompt("Digite um numero!"))
//     const cateto2 = Number(prompt("Digite um numero!"))
//     const hipotenusa = Math.hypot(cateto1, cateto2)
    
//  console.log(hipotenusa)
// }
// calcular()