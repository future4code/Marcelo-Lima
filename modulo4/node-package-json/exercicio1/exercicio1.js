// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R= usando o process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma 
// mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

// const userName = process.argv[2]
// const age = Number(process.argv[3])

// const text = `Olá, ${userName}! Você tem ${age} anos.`

// let red, blue, reset;
// red   = '\u001b[31m';
// blue  = '\u001b[34m';
// reset = '\u001b[0m';

// console.log(red + text)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

const userName = process.argv[2]
const age = Number(process.argv[3])
const newAge = age + 7

const text = `Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${newAge}`

const check = () => {
    if(process.argv[3] === undefined) {
        return "Esperava 2 parâmetros, só recebi um"
    } else {
        return text
    }
}

let red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[34m';
reset = '\u001b[0m';

console.log(check())