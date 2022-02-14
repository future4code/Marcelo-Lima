import { Request, Response } from "express"
import connection from "../data/connection"

// a)
export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name

        const resultFilterByName = await connection.raw(`
            SELECT id, name, email, type FROM aula48_exercicio
            WHERE name LIKE "%${name}%";
        `)

        res.status(200).send(resultFilterByName[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// b)

export const getUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        const resultFilterByType = await connection.raw(`
            SELECT id, name, email, type FROM aula48_exercicio
            WHERE type LIKE "%${type}%";
        `)

        res.status(200).send(resultFilterByType[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
