import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getRecipeById(req: Request, res: Response): Promise<void>{
    try {
        const id = req.params.id as string
        const token = req.headers.authorization as string

        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        if(!tokenExist){
            res.status(422).send("token inválido")
        }

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipe(id)

        res.status(200).send(recipe)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}