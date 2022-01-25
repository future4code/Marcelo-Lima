//Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
//(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

function text (name: string, date: string): string {
    const part = date.split('/')
    return `Olá me chamo ${name}, nasci no dia ${part[0]}, do mês ${part[1]}, do ano de ${part[2]}`
}

console.log(text(process.argv[2], process.argv[3]))