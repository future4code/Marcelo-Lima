import { PokemonInfo } from "../model/Pokemon"

export interface PokemonRepository {
    getAllPokemons(limit: number, offset: number): Promise<any[] | null>
    getPokemonByName(name: string, limit: number, offset: number): Promise<PokemonInfo[] | null>
    getPokemonByGeneration(Generation: number, limit: number, offset: number): Promise<PokemonInfo[] | null>
    getPokemonByType(Type_1: string, limit: number, offset: number): Promise<PokemonInfo[] | null>
    getPokemonById(Row: number, limit: number, offset: number): Promise<PokemonInfo[] | null>
    getPokemonLegendary(Legendary: number, limit: number, offset: number): Promise<PokemonInfo[] | null>
}