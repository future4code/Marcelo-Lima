import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProfile(req: Request, res: Response):  Promise<any>{
    try {
        const token = req.headers.authorization as string
        
        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getProfile(tokenExist.id)

        res.status(200).send(user)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}