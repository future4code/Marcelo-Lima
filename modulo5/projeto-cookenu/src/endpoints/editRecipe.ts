import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";

export async function editRecipe(req: Request, res: Response): Promise<void>{
    try {
        const token = req.headers.authorization as string
        const recipeId = req.query.recipeId as string
        const {title, description} = req.body

        if (!token) {
            res.status(422).send("é necessário informar um token no authorization")
        }
        if(!title || !description){
            res.status(422).send("é necessário informar os campos 'title' e 'description'")
        }

        const authenticator = new Authenticator()
        const tokenExist = authenticator.getTokenData(token)
        
        if(!tokenExist){
            res.status(422).send("token inválido")
        }
        if(tokenExist.role === "NORMAL"){
            res.status(422).send("você não tem permissão de ADMIN para concluir o procedimento")
        }
        
        const recipeDatabase = new RecipeDatabase()
        await recipeDatabase.updateRecipe(recipeId, title, description)
        
        res.status(200).send({message: "receita atualizada com sucesso!"})
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}