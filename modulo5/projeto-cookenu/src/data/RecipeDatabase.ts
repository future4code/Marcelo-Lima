import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public async createRecipe(recipe: Recipe, idUser: string): Promise<any> {
        try {
            const recipes = await BaseDatabase.connection("recipes_cookenu").insert({
                id: recipe.getId(),
                user_id: idUser,
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
    public async getFeedRecipes(user_id: string): Promise<any>{
        try {
            const result = await BaseDatabase.connection("recipes_cookenu")
                .select()
                .where({user_id})
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}