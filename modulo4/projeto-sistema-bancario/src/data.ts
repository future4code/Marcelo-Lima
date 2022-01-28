
type Transactions = {
    value: number,
    date: string,
    description: string
}

type Users = {
    id: number
    name: string,
    CPF: string,
    birthDate: string,
    balance: number,
    extract: Transactions[]
}


export const users: Users[] = [
    {
        id: 1,
        name: 'Ana',
        CPF: '055.568.870-47',
        birthDate: '10/10/1990',
        balance: 5000,
        extract: [{
            date: '15/02/2015',
            value: 1500,
            description: 'compra de uma tv'
        }]
    },
    {
        id: 2,
        name: 'Pedro',
        CPF: '224.099.680-31',
        birthDate: '06/12/1998',
        balance: 15000,
        extract: [{
            date: '10/05/2018',
            value: 2000,
            description: 'compra de um celular'
        }]
    },
    {
        id: 3,
        name: 'Igor',
        CPF: '126.090.450-42',
        birthDate: '12/04/1996',
        balance: 20000,
        extract: [{
            date: '25/09/2019',
            value: 10000,
            description: 'compra de uma moto'
        }]
    },
]