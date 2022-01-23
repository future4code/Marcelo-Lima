// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável

type AnyType = string | number | boolean

function type (t: AnyType): string {
    return typeof t
}

console.log(type(true))