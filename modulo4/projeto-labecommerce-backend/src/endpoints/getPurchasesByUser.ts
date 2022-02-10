import { Request, Response } from "express";
import connection from "../data/connection";

export const getPurchasesByUser = async(req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try{
        const userId = req.params.userId
        const result = await connection.raw(`
            SELECT user.name, pro.name as product, quantity, total_price FROM labecommerce_purchases pur
            JOIN labecommerce_users user ON pur.user_id = user.id
            JOIN labecommerce_products pro ON pur.product_id = pro.id
            WHERE pur.user_id = "${userId}";
        `)

        res.status(201).send(result[0])
    }catch(error: any){
        res.status(errorCode).send({ message: error.message || error.sqlmessage })
    }
}