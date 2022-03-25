import app from "./app";
import { PokemonBusiness } from "./business/PokemonBusiness";
import { PokemonController } from "./controller/PokemonController";
import { PokemonDatabase } from "./data/PokemonDatabase";

const pokemonController = new PokemonController( new PokemonBusiness( new PokemonDatabase))

app.get("/pokemon", pokemonController.getAllPokemons)
app.get("/pokemon/name", pokemonController.getPokemonName)
app.get("/pokemon/generation", pokemonController.getPokemonByGeneration)
app.get("/pokemon/type", pokemonController.getPokemonByType)
app.get("/pokemon/id", pokemonController.getPokemonById)
app.get("/pokemon/legendary", pokemonController.getPokemonLegendary)