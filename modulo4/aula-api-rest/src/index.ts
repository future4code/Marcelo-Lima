import express, { Request, Response } from "express";
import { rmSync } from "fs";

import { AddressInfo } from "net";
import { Type, Users, users } from "./data";

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

// Exercício 1
// a) método GET
// b) pegar informações da entidade usuários

app.get('/users', (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (err) {
    res.status(400).send(err)
  }
})

// Exercício 2
// a) pela query
// b) comparando com o enum criado

app.get('/users/type', (req: Request, res: Response) => {
  try {
    const type: string = req.query.q as string

    if (!type) { throw new Error('please fill the query') }

    if (type.toLowerCase() !== Type.ADMIN.toLowerCase() || type.toLowerCase() !== Type.NORMAL.toLowerCase()) {
      throw new Error('type needs to be a string "admin" or "normal"')
    }

    const usersFilter = users.filter((user) => user.type.toLowerCase() == type.toLowerCase())
    res.status(200).send(usersFilter)
  } catch (error: any) {
    switch (error.message) {
      case 'please fill the query':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'type needs to be a string "admin" or "normal"':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

// Exercício 3
// a) query

app.get('/users/name', (req: Request, res: Response) => {
  try {
    const name: string = req.query.q as string

    if (!name) { throw new Error('please fill the query') }

    const user = users.filter((user) => {
      return user.name.toLowerCase() === name.toLowerCase()
    })

    if (user.length === 0) { throw new Error('user not found') }

    res.status(200).send(user)

  } catch (error: any) {
    switch (error.message) {
      case 'please fill the query':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      case 'user not found':
        res.status(404) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

// Exercício 4
// a) nada
// b) não. Porque o método PUT serve para alteração, POST serve para a criação

app.post('/users', (req: Request, res: Response) => {
  try {
    const { name, email, type, age } = req.body

    if (!name || !email || !type || !age) { throw new Error('please fill the fields') }

    users.push({ id: users.length + 1, name, email, type, age })

    res.status(200).send('successfully added')

  } catch (error: any) {
    switch (error.message) {
      case 'please fill the fields':
        res.status(400) // pode ser tb res.statusCode = 422
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})