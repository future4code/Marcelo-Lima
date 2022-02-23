import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProfileOtherUser(req: Request, res: Response):  Promise<any>{
    try {
        const id = req.params.id as string
        const token = req.headers.authorization as string
       
        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        if(!tokenExist){
            res.status(400).send("token não existe")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getProfile(id)
        if(!user){
            res.status(404).send("usuário não encontrado")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}