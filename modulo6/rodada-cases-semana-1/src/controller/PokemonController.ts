import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { CustomError } from "../error/CustomError";

export class PokemonController {
    constructor(
        private pokemonsBusiness: PokemonBusiness
    ) {}
    getAllPokemons = async (req: Request, res: Response) => {
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getAllPokemons(Number(limit), Number(page))
            if(!result){
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if(error instanceof CustomError){
                res.status(error.code).send(error.message)
            }else{
                res.status(400).send(error.message)
            }
        }
    }
}