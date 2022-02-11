import { Request, Response } from "express";
import connection from "../data/connection";

export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try {
        let search = req.query.search as string
        let order = req.query.order as string

        let result = await connection(`labecommerce_products`)

        if (order && order.toUpperCase() !== "ASC" && order && order.toUpperCase() !== "DESC") {
            errorCode = 400
            throw new Error("just values 'ASC' or 'DESC' to order")
        }

        if (order && order.toUpperCase() === "ASC" || order && order.toUpperCase() === "DESC") {
            result = await connection(`labecommerce_products`)
                .orderBy("name", order)
        }

        if (search) {
            result = await connection(`labecommerce_products`)
                .where("name", "LIKE", `%${search}%`)
                .orderBy("name", order)
        }

        res.status(201).send(result)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}