import app from "./app";
import { PokemonBusiness } from "./business/PokemonBusiness";
import { PokemonController } from "./controller/PokemonController";
import { PokemonDatabase } from "./data/PokemonDatabase";
import { routerPoke } from "./router/Router";

const pokemonController = new PokemonController(
    new PokemonBusiness(
        new PokemonDatabase()
    ))

app.use("/pokemon", routerPoke)


app.get("/pokemon/name", pokemonController.getPokemonByName)
app.get("/pokemon/generation", pokemonController.getPokemonByGeneration)
app.get("/pokemon/type", pokemonController.getPokemonByType)
app.get("/pokemon/id", pokemonController.getPokemonById)
app.get("/pokemon/legendary", pokemonController.getPokemonLegendary)