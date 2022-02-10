import { Request, Response } from "express";
import connection from "../data/connection";


export const createPurchases = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try {
        const { userId, productId, quantity } = req.body as { userId: string, productId: string, quantity: number }

        if (!userId || !productId || !quantity) {
            errorCode = 422
            throw new Error("please fill the fields")
        }

        const checkUserId = await connection()
            .select("id")
            .from("labecommerce_users")
            .where("id", userId)
        console.log(checkUserId)
        if (checkUserId.length === 0) { throw new Error("user id not found") }

        const checkProductId = await connection()
            .select("id", "price")
            .from("labecommerce_products")
            .where("id", productId)

        if (checkProductId.length === 0) { throw new Error("product id not found") }

        const totalPrice = checkProductId[0].price * quantity

        await connection.raw(`
            INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
            VALUES ("${Date.now()}", "${checkUserId[0].id}", "${checkProductId[0].id}", "${quantity}", "${totalPrice}")
        `)

        res.status(201).end()
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message || error.sqlmessage })
    }
}