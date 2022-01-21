// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// R= 

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma 
// mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

// const userName = process.argv[2]
// const age = Number(process.argv[3])

// const text = `Olá, ${userName}! Você tem ${age} anos.`

// console.log(text)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// const userName = process.argv[2]
// const age = Number(process.argv[3])
// const newAge = age + 7

// const text = `Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${newAge}`

// console.log(text)

// ---------------------------------------------------------------------------------------------------

// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const math = (result) => {
//     const numb1 = Number(process.argv[3])
//     const numb2 = Number(process.argv[4])
//     if(process.argv[2] === 'add'){
//         return result = numb1 + numb2
//     } else if (process.argv[2] === 'sub'){
//         return result = numb1 - numb2
//     } else if (process.argv[2] === 'mult'){
//         return result = numb1 * numb2
//     } else if (process.argv[2] === 'div'){
//         return result = numb1 / numb2
//     }
//         return result
// }

// console.log(math())

// ---------------------------------------------------------------------------------------------------

// Exercício 3
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a 
// nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada 
// antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const newTask = () => {
//     const task = ['Lavar a louça']
//     const input = process.argv[2]
//     const newT = task.push(input)
//     const taskMapped = task.map((t)=> {
//         return t
//     })
//     return taskMapped
// }

// console.log(newTask())