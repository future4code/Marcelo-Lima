import { UserRepository } from "../business/PokemonRepository";
import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDatabase implements UserRepository {
    protected TABLE_NAME = "PokemonGo"
    getAllPokemons = async (limit: number, offset: number) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .limit(limit)
                .offset(offset)

            return result
        } catch (error) {
            throw new CustomError("Error accessing database", 400)
        }
    }

}