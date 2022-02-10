import { Request, Response } from "express";
import connection from "../data/connection";


export const createUser = async(req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try{
        const {name, email, password} = req.body as {name: string, email: string, password: string}

        if(!name || !email || !password){
            errorCode = 400
            throw new Error("please fill the fields")
        }

        await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password)
        VALUES ("${Date.now()}", "${name}", "${email}", "${password}")
        `)

        res.status(201).end()
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
}