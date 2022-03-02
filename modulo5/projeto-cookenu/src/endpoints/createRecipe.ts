import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import generateId from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response): Promise<void>{
    try {
        const token = req.headers.authorization as string
        const {title, description} = req.body
        const id: string = generateId()
        const date = new Date()
        
        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)

        if(!title || !description){
            res.status(422).send("preencha corretamente os campos 'title' e 'description'")
        }
        if(!tokenExist){
            res.status(422).send("token inválido")
        }
        
        const recipe: Recipe = new Recipe(id, title, description, date)
        const recipeDatabase = new RecipeDatabase()
        await recipeDatabase.createRecipe(recipe, tokenExist.id)

        res.status(201).send({message: "receita criada com sucesso"})
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}