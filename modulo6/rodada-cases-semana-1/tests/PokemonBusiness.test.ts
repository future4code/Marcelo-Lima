import { PokemonBusiness } from "../src/business/PokemonBusiness"
import { PokemonDatabase } from "../src/data/PokemonDatabase"
import { CustomError } from "../src/error/CustomError"
import { PokemonDatabaseMock } from "./mocks/PokemonDatabaseMock"

const pokemonDatabaseMock = new PokemonBusiness(new PokemonDatabaseMock() as any)

describe("Testing endpoint PokemonBusiness", () => {

    test("Should catch error when name pokemon is not find", async () => {
        expect.assertions
        try {
            const result = await pokemonDatabaseMock.getPokemonByName("ccc", 10, 1)
            console.log(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                expect(error.message).toEqual("Pokemon not found")
            }
        }
    })
})