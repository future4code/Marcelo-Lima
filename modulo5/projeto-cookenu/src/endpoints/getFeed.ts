import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getFeed(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string
        if (!token) {
            res.status(422).send("é necessário informar um token no authorization")
        }

        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        const recipeDatabase = new RecipeDatabase()
        const feed = await recipeDatabase.getFeedRecipes(tokenExist.id)

        if (!feed) {
            res.status(422).send("este usuário não criou nenhuma receita")
        }

        res.status(200).send(feed)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}