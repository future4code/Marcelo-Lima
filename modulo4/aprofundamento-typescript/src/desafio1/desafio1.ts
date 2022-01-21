// Exercício 5

// Você foi contratado por um escritório médico para organizar a agenda de consultas

type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}[]

const consultas: Consultas = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function namesOrder(arrayObj: Consultas): object[]{
    return arrayObj.sort(function (objA, objB) {
        const a: string = objA.nome.toLowerCase().replace(/[àáâãäå]/, "a").replace(/[èéêë]/, "e").replace(/[ìíîï]/, "i").replace(/[òóôõö]/, "o").replace(/[ùúûü]/, "u").replace(/[ç]/, "c").replace(/[^a-z0-9]/gi, '')
        const b: string = objB.nome.toLowerCase().replace(/[àáâãäå]/, "a").replace(/[èéêë]/, "e").replace(/[ìíîï]/, "i").replace(/[òóôõö]/, "o").replace(/[ùúûü]/, "u").replace(/[ç]/, "c").replace(/[^a-z0-9]/gi, '')
        return a < b ? -1 : a > b ? 1 : 0;
    })
}

console.log(namesOrder(consultas))