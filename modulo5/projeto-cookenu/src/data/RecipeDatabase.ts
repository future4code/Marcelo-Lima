import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{
    public async createRecipe(recipe: Recipe): Promise<any>{
        try {
            const recipes = await BaseDatabase.connection("recipes_cookenu").insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                cratedAt: recipe.getDate()
            })
            return recipes[0] && Recipe.toUserModel(recipes[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getRecipe(id: string): Promise<any> {
        try {
            const recipe = await BaseDatabase.connection("recipes_cookenu")
                .select("id", "title", "description", "cratedAt")
                .where({ id })
            return recipe[0] && Recipe.toUserModel(recipe[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}