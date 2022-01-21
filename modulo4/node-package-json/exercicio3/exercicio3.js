// Exercício 3
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a 
// nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada 
// antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const newTask = () => {
    const task = ['Lavar a louça']
    const input = process.argv[2]
    const newT = task.push(input)
    const taskMapped = task.map((t)=> {
        return t
    })
    return taskMapped
}

console.log(newTask())