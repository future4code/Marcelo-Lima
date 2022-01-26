import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { idText } from "typescript";
import { cellPhones } from './data'

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

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send('api está funcionando')
})

// Exercício 4

app.get("/celulares", (req: Request, res: Response) => {
    res.status(200).send(cellPhones)
})

// Exercício 3 e 7

app.post("/addProduto", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body
        const userIdToAdd = req.headers.authorization

        if (!userIdToAdd) { throw new Error('header de authorization não informado') }

        if (price <= 0) { throw new Error('O preço informado deve ser maior que 0') }

        if (!name || !price || !name && !price) { throw new Error('campos necessários para criar produto não informados') }

        if (typeof (price) !== typeof (0)) { throw new Error('O preço informado deve ser um número') }

        cellPhones.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })

        res.send(cellPhones)
    }
    catch (error: any) {
        switch (error.message) {
            case "campos necessários para criar produto não informados":
                res.status(422) // pode ser tb res.statusCode = 422
                break
            case "header de authorization não informado":
                res.status(401)
                break
            case 'O preço informado deve ser um número':
                res.status(401)
                break
            case 'O preço informado deve ser maior que 0':
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// Exercício 5 e 8

app.put("/celulares/:id", (req: Request, res: Response) => {
    try {
        const cellId: string = req.params.id
        const newPrice: number = req.body.newPrice

        if (newPrice <= 0) { throw new Error('O preço informado deve ser maior que 0') }

        if (!newPrice) { throw new Error('campo necessário para mudar o preço não informado') }

        if (typeof (newPrice) !== typeof (0)) { throw new Error('O preço informado deve ser um número') }

        cellPhones.map((cell) => {
            if (cell.id === cellId) {
                cell.price = newPrice
            } else {
                throw new Error('Produto não encontrado')
            }
        })
        res.send(cellPhones)
    }
    catch (error: any) {
        switch (error.message) {
            case 'O preço informado deve ser um número':
                res.status(422) // pode ser tb res.statusCode = 422
                break
            case 'campo necessário para mudar o preço não informado':
                res.status(400)
                break
            case 'O preço informado deve ser maior que 0':
                res.status(401)
                break
            case 'Produto não encontrado':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// Exercício 6 e 9

app.delete('/celulares/:id', (req: Request, res: Response) => {
    try {
        const cellId: string = req.params.id

        cellPhones.map((cell, index) => {
            if (cell.id === cellId) {
                cellPhones.splice(index, 1)
            } else {
                throw new Error('Produto não encontrado')
            }
        })
        res.send(cellPhones)
    }
    catch (error: any) {
        switch (error.message) {
            case 'Produto não encontrado':
                res.status(404)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})