import { Request, Response } from "express";
import connection from "../data/connection";


export const getAllProducts = async(req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try{
        const result = await connection(`labecommerce_products`)

        res.status(201).send(result)
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
}