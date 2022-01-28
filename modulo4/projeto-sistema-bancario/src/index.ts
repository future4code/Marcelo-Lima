import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// get all accounts
app.get('/users', (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error)
  }
})

// get account
app.get('/account', (req: Request, res: Response) => {
  try {
    const { name, cpf } = req.query

    if (!name || !cpf) { throw new Error('please fill the fields') }

    const account = users.find((user) => {
      if (user.name === name && user.CPF === cpf) {
        return user
      } else if (user.name === name && user.CPF !== cpf || user.name !== name && user.CPF === cpf) {
        throw new Error('Account not exist, please check the data')
      }
    })

    res.status(200).send(account)

  } catch (error: any) {
    switch (error.message) {
      case 'please fill the fields':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'Account not exist, please check the data':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

// create new account
app.post('/createAccount', (req: Request, res: Response) => {
  try {
    const { name, CPF, birthDate } = req.body

    if (!name || !CPF || !birthDate) { throw new Error('please fill the fields') }

    users.map((user) => {
      if (user.CPF === CPF) { throw new Error('CPF already exists') }
    })

    const [year, month, day] = birthDate.split('/')
    const actualDate: number = new Date().getTime()
    const userBirthDate: number = new Date(`${year}-${month}-${day}`).getTime()
    const age: number = (actualDate - userBirthDate) / 1000 / 60 / 60 / 24 / 365

    if (age < 18) { throw new Error('minimun age = 18') }

    users.push({
      id: users.length + 1,
      name,
      CPF,
      birthDate,
      balance: 0,
      extract: []
    })

    res.status(200).send('Account created sucessfully')
  } catch (error: any) {
    switch (error.message) {
      case 'please fill the fields':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'CPF already exists':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'minimun age = 18':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

app.put('/account', (req: Request, res: Response) => {
  try {
    const { name, CPF, balance } = req.body
    let cpfExist = false
    const actualDate = new Date()

    console.log(`${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}`)
    if (!name || !CPF || !balance) { throw new Error('please fill the fields') }

    users.map((user) => {
      if (user.CPF !== CPF) {
        cpfExist = true
      } else {
        cpfExist = false
      }
    })

    if (cpfExist) { throw new Error('Account not exist, please check the data') }

    users.forEach((user) => {
      if (user.CPF == CPF) {
        user.balance = user.balance + Number(balance)
        user.extract.push({
          date: `${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}`,
          value: Number(balance),
          description: 'Depósito de dinheiro'
        }
        )

      }
    })

    res.status(200).send('Sucessfully')

  } catch (error: any) {
    switch (error.message) {
      case 'please fill the fields':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'Account not exist, please check the data':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

// app.put('/account/pay', (req: Request, res: Response))