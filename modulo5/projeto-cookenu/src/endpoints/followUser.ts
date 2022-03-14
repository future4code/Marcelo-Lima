import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Follower } from "../entities/Follower";
import { Authenticator } from "../services/Authenticator";
import generateId from "../services/IdGenerator";

export async function followUser(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string
        const followId: string = req.query.followId as string
        const id: string = generateId()

        if (!token) {
            res.status(422).send("é necessário informar um token no authorization")
        }
        if (!followId) {
            res.status(422).send("é necessário informar um id de usuário")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getProfile(followId)
        
        if(!user){
            res.status(404).send("usuário não encontrado")
        }

        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        const isFollowing = await userDatabase.getFollowers(tokenExist.id, followId)

        if(isFollowing){
            res.status(409).send("usuário já está sendo seguido")
        }

        const follower: Follower = {
            id,
            user_id: tokenExist.id,
            follows_id: followId
        }

        await userDatabase.insertFollower(follower)

        res.status(200).send({message: "usuário seguido com sucesso!"})
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}