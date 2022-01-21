// Exercício 2
// Observe a função a seguir, escrita em JavaScript:

function obterEstatisticas(numeros: number[]):object {

    const numerosOrdenados:number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type NumerosRetornados = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas: NumerosRetornados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// R: Entrada é um array de números
// R: Saída é um objeto com o número marior, menor e a média entre eles

console.log(obterEstatisticas([1, 3, 5, 8, 9]))

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

//  R: um objeto onde tem um type que suas propriedades são todas numbers

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, 
// temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas(numeros: number[]):void
}

const amostraDeIdades: AmostraDeDados = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {}
}

console.log(amostraDeIdades)