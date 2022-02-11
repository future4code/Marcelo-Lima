import { Request, Response } from "express";
import connection from "../data/connection";

const getPurchases = async (): Promise<any> => {
    const purchases = await connection.raw(`
            SELECT user.id, user.name, pro.name as product, quantity, total_price FROM labecommerce_purchases pur
            JOIN labecommerce_users user ON pur.user_id = user.id
            JOIN labecommerce_products pro ON pur.product_id = pro.id;
        `)
    return purchases[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try {
        const result = await connection(`labecommerce_users`)

        // const purchases = await getPurchases()
       
        // const resultMap = result.map((user) => {
        //     purchases.map((pur: any) => {
        //         if(user.id === pur.id){
        //             user = {...user, purchases: pur}
        //         }
        //     })
        // })

        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}