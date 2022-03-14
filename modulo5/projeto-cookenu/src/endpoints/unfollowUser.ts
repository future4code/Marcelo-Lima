import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Follower } from "../entities/Follower";
import { Authenticator } from "../services/Authenticator";

export async function unfollowUser(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string
        const unfollowId: string = req.query.unfollowId as string
        
        if (!token) {
            res.status(422).send("é necessário informar um token no authorization")
        }
        if (!unfollowId) {
            res.status(422).send("é necessário informar um id de usuário")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getProfile(unfollowId)
        
        if(!user){
            res.status(404).send("usuário não encontrado")
        }
        
        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)
        
        const isFollowing = await userDatabase.getFollowers(tokenExist.id, unfollowId)
        
        if(!isFollowing){
            res.status(409).send("usuário não está sendo seguido pelo usuário informado")
        }

        const follower: Follower = {
            id: isFollowing.id,
            user_id: tokenExist.id,
            follows_id: unfollowId
        }

        await userDatabase.deleteFollower(follower)

        res.status(200).send({message: "deixado de seguir com sucesso!"})
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}