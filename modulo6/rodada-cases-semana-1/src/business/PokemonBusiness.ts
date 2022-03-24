import { PokemonDatabase } from "../data/PokemonDatabase"

export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase
    ) {}
    getAllPokemons = async (limit: number, page: number) => {
        const offset = Number(limit) * (page -1)
        const result = await this.pokemonDatabase.getAllPokemons(limit, offset)
        return result
    }
}
