// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

const math = () => {
    const numb1 = Number(process.argv[3])
    const numb2 = Number(process.argv[4])
    
    if (process.argv[4] === undefined) {
        return "Esperava 2 parâmetros, só recebi um"
    } else {
        let result = 0
        if (process.argv[2] === 'add') {
            return result = numb1 + numb2
        } else if (process.argv[2] === 'sub') {
            return result = numb1 - numb2
        } else if (process.argv[2] === 'mult') {
            return result = numb1 * numb2
        } else if (process.argv[2] === 'div') {
            return result = numb1 / numb2
        }
        return result
    }
}

let red, blue, reset;
red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

console.log(red + math())