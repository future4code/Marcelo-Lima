// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, 
// e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um 
// booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada 
// segundo os seguintes critérios

// Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
// (se for exatamente 5 anos, deve ser renovada)

// Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos 
// (se for exatamente 10 anos, deve ser renovada)

// Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

const birthDate: string = '18/06/1999'
const dateEmission: string = '05/08/2010'

function willRenewed(date: string, cartDate: string): boolean {
    const birthDate = date.split('/')
    const birthNewDate: Date = new Date(Number(birthDate[2]), Number(birthDate[1]) - 1, Number(birthDate[0]))

    const dateEmission = cartDate.split('/')
    const newDateEmission: Date = new Date(Number(dateEmission[2]), Number(dateEmission[1]) - 1, Number(dateEmission[0]))

    const currentDate: Date = new Date()

    const day: number = 1000 * 60 * 60 * 24 * 365;

    const age: number = (Number(currentDate) - Number(birthNewDate)) / day
    const emissionTime: number = (Number(currentDate) - Number(newDateEmission)) / day

    if (age <= 20 && emissionTime >= 5) { return true }
    else if (age > 20 && age <= 50 && emissionTime >= 10) { return true }
    else if (age > 50 && emissionTime >= 15) { return true }
    else { return false }
}

console.log(willRenewed(birthDate, dateEmission))


