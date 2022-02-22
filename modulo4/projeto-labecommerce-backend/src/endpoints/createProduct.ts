import { Request, Response } from "express";
import connection from "../data/connection";


export const createProdutc = async(req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try{
        const {name, price, imageUrl} = req.body as {name: string, price: number, imageUrl: string}

        if(!name || !price || !imageUrl){
            errorCode = 400
            throw new Error("please fill the fields")
        }

        await connection.raw(`
        INSERT INTO labecommerce_products (id, name, price, image_url)
        VALUES ("${Date.now()}", "${name}", "${price}", "${imageUrl}")
        `)

        res.status(201).end()
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
}