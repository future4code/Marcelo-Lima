import express from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonController } from "../controller/PokemonController"
import { PokemonDatabase } from "../data/PokemonDatabase"

export const routerPoke = express.Router()

const pokemonController = new PokemonController(
    new PokemonBusiness(
        new PokemonDatabase()
    ))

routerPoke.get("/", pokemonController.getAllPokemons)
routerPoke.get("/name", pokemonController.getPokemonByName)
routerPoke.get("/generation", pokemonController.getPokemonByGeneration)
routerPoke.get("/type", pokemonController.getPokemonByType)
routerPoke.get("/id", pokemonController.getPokemonById)
routerPoke.get("/legendary", pokemonController.getPokemonLegendary)
