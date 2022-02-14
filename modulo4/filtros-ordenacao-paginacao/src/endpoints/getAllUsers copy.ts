import { Request, Response } from "express"
import connection from "../data/connection"

export default async function selectByPage(page: number): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT 5
       SETOFF ${page};
    `)

    return result[0]
}

export const getUserByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page: number = Number(req.query.page)
        let offset = 5 * (page - 1)
        const users = await selectByPage(offset)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}