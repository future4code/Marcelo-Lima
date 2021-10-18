// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // array.reverse()
    // return array


// DESAFIO
    let arrayInvertido = []
    for(let i=array.length -1; i >= 0; i--){
        arrayInvertido.push(array[i])
    } 
    return arrayInvertido
} 

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function(a, b){
      if(a>b) return 1
      if(a<b) return -1
  })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((item) =>{
        return item % 2 === 0
    }) 
    return numerosPares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((item) =>{
        return item % 2 === 0
    }) 
    console.log(numerosPares)
    let numerosElevados = []
    let numerosMultiplicados = []
    for(let i=0; i<numerosPares.length; i++){
        numerosMultiplicados = numerosPares[i] ** 2
        numerosElevados.push(numerosMultiplicados) 
    }
    return numerosElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let numero of array){
        if(numero > maior) {
            maior = numero
        }
    }
    return maior
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: true,
        diferenca: 0
    }

    if(num1 < num2){
        objeto.diferenca = num2 - num1
        objeto.maiorDivisivelPorMenor = num2 % num1 === 0
    } else if(num1>num2){
        objeto.diferenca = num1 - num2
        objeto.maiorDivisivelPorMenor = num1 % num2 === 0
    }

    if(num1>num2){
        objeto.maiorNumero=num1
    } else if(num1<num2){
        objeto.maiorNumero=num2
    } else{
        objeto.maiorNumero= num1  
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numeros=[]
   for(let i =0; numeros.length<n; i+= 2){
       numeros.push(i)
   }
   return numeros 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let resultado = ""
    if(ladoA === ladoB && ladoA === ladoB && ladoB === ladoC){
        resultado = "Equilátero"
    } else if(ladoA === ladoB && ladoB < ladoC){
        resultado = "Isósceles"
    } else if(ladoA === ladoC && ladoC < ladoB){
        resultado = "Isósceles"
    }else if(ladoA < ladoB && ladoB === ladoC){
        resultado = "Isósceles"
    }else{
        resultado = "Escaleno"
    }
    console.log(resultado)
    return resultado
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}