// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    array.reverse()
    return array
    // let arrayInvertido = []
    // for(let i=array.length; i >= 0; i--){
    //     arrayInvertido.push(i)
    // } return arrayInvertido
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
    let arrayElevado2 = 0
    let arrayElevado = 0
    for(let i=0; i<numerosPares.length; i++){
        arrayElevado = numerosPares[i] ** 2
        arrayElevado2[0] += arrayElevado
    }
    return arrayElevado2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

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