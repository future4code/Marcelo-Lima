import { PokemonRepository } from "../business/PokemonRepository";
import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDatabase implements PokemonRepository {
    public TABLE_NAME = "PokemonGo"
    getAllPokemons = async (limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .limit(limit)
                .offset(offset)

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
    getPokemonByName = async (name: string, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ name })

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
    getPokemonByGeneration = async (Generation: number, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ Generation })
                .limit(limit)
                .offset(offset)

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
    getPokemonByType = async (Type_1: string, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ Type_1 })
                .limit(limit)
                .offset(offset)

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
    getPokemonById = async (Row: number, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ Row })

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
    getPokemonLegendary = async (Legendary: number, limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("Row", "name", "Type_1", "Type_2", "ATK", "DEF", "STA")
                .where({ Legendary })
                .limit(limit)
                .offset(offset)

            if (!result) {
                return null
            }
            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }
} 