// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt(`Digite uma mensagem!`)

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt(`Digite a altura de um retângulo!`)
  const largura = prompt(`Digite a largura de um retângulo!`)
  console.log(`Altura: ${altura}\nLargura: ${largura}`)
  const area = altura * largura
  console.log(area)
  //implemente sua lógica aqui
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt(`Dígite em qual estamos atualmente!`))
  const anoNascimento = Number(prompt(`Dígite o ano no qual você nasceu!`))
  const idade = anoAtual - anoNascimento
  console.log(idade)
  // implemente sua lógica aqui
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  console.log(imc)
  return imc
  // implemente sua lógica aqui
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(`Qual o seu nome`)
  const idade = Number(prompt(`Qual a sua idade`))
  const email = prompt(`Qual o sue email?`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(`Qual sua primeira cor favorita?`)
  const cor2 = prompt(`Qual sua segunda cor favorita?`)
  const cor3 = prompt(`Qual sua terceira cor favorita`)
  const coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const palavra = string.toUpperCase()
  return palavra
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoEspetaculo = custo / valorIngresso
  const quantIngresso = custoEspetaculo
  return quantIngresso
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const compararTamanho = string1.length === string2.length
  return compararTamanho
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroIndice = array[0]
  return primeiroIndice
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoIndice = array[array.length -1]
  return ultimoIndice
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroIndice = array[0]
  const segundoIndice = array[array.length -1]
  array[0] = segundoIndice
  array[array.length -1] = primeiroIndice
  const indice = array
  return indice
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const comparando = string1.toLowerCase() === string2.toLowerCase()
  console.log(comparando)
  return comparando

  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt(`Qual o ano atual?`))
  const anoNascimento = Number(prompt(`Qual o ano que você nasceu?`))
  const anoRg = Number(prompt(`Qual o ano que você criou seu rg?`))
  const idadePessoa = anoAtual - anoNascimento
  const rg = anoAtual - anoRg
  const renovacao1 = idadePessoa <= 20 && rg >=5
  const renovacao2 = idadePessoa > 20 && idadePessoa <= 50 && rg >=10
  const renovacao3 = idadePessoa > 50 && rg >=15
  // implemente sua lógica aqui
  console.log(renovacao1||renovacao2||renovacao3)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  // implemente sua lógica aqui

}