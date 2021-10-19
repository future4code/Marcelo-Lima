// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // Usando o reverse()
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
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    } else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenada = array.sort(function(a, b){
        if(a>b) return 1
        if(a<b) return -1
    })
    let segundoMenorValor = arrayOrdenada[1]
    let segundoMaiorValor = arrayOrdenada[arrayOrdenada.length - 2]
    let arrayResultado = [segundoMaiorValor, segundoMenorValor]
    return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = "Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci"
    let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.` 
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let objeto = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let saberPessoas= (pessoas) => {
        if(pessoas.altura > 1.5 && pessoas.idade > 14 && pessoas.idade< 60){
            return pessoas
        }
    }
    let pessoasAutorizadas = pessoas.filter(saberPessoas)
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let saberPessoas= (pessoas) => {
        if(pessoas.altura <= 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60){
            return pessoas
        }
    }
    let pessoasNaoAutorizadas = pessoas.filter(saberPessoas)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((conta) => {
        let soma = conta.compras.reduce((acc,cur) => acc + cur, 0)
        let saldo = conta.saldoTotal
        return{...conta, saldoTotal: saldo - soma, compras: []}
    })
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b){
        if(a.nome>b.nome) return 1
        if(a.nome<b.nome) return -1
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   return consultas.sort((primeira, segunda) =>{
       return new Date(primeira.dataDaConsulta.split("/").reverse()).getTime() - new Date(segunda.dataDaConsulta.
       split("/").reverse()).getTime()
   })
}