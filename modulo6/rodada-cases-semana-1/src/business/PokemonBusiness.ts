import { PokemonDatabase } from "../data/PokemonDatabase"
import { CustomError } from "../error/CustomError"

export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase
    ) { }
    getAllPokemons = async (limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        const result = await this.pokemonDatabase.getAllPokemons(limit, offset)
        return result
    }
    getPokemonByName = async (name: string, limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        if (!name) {
            throw new CustomError("Pokemon name is missing", 401)
        }
        const result = await this.pokemonDatabase.getPokemonByName(name, limit, offset)
        if (result?.length === 0) {
            throw new CustomError("Pokemon not found", 404)
        }
        return result
    }
    getPokemonByGeneration = async (generation: number, limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        if (!generation) {
            throw new CustomError("Pokemon generation is missing", 401)
        }
        const result = await this.pokemonDatabase.getPokemonByGeneration(generation, limit, offset)
        if (result?.length === 0) {
            throw new CustomError("Pokemon generation not found", 404)
        }
        return result
    }
    getPokemonByType = async (type: string, limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        if (!type) {
            throw new CustomError("Pokemon type is missing", 401)
        }
        const result = await this.pokemonDatabase.getPokemonByType(type, limit, offset)
        if (result?.length === 0) {
            throw new CustomError("Pokemon type not found", 404)
        }
        return result
    }
    getPokemonById = async (id: number, limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        if (!id) {
            throw new CustomError("Pokemon id is missing", 401)
        }
        const result = await this.pokemonDatabase.getPokemonById(id, limit, offset)
        if (result?.length === 0) {
            throw new CustomError("Pokemon not found", 404)
        }
        return result
    }
    getPokemonLegendary = async (legendary: number, limit: number, page: number) => {
        const offset = Number(limit) * (page - 1)
        if (!legendary) {
            throw new CustomError("Pokemon legendary is missing", 401)
        }
        const result = await this.pokemonDatabase.getPokemonLegendary(legendary, limit, offset)
        if (result?.length === 0) {
            throw new CustomError("Pokemon legendary not found", 404)
        }
        return result
    }
}
