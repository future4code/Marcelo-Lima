import { Request, Response } from "express";
import connection from "../data/connection";


export const getAllUsers = async(req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try{
        const result = await connection(`labecommerce_users`)
        // .select("name", "email")

        res.status(201).send(result)
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
}