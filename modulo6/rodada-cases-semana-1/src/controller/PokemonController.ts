import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonDatabase } from "../data/PokemonDatabase";
import { CustomError } from "../error/CustomError";

export class PokemonController {

    constructor(
        private pokemonsBusiness: PokemonBusiness
    ) {
        // this.pokemonsBusiness =  new PokemonBusiness( new PokemonDatabase)
    }
    getAllPokemons = async (req: Request, res: Response) => {
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getAllPokemons(Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
    getPokemonByName = async (req: Request, res: Response) => {
        const name = req.query.name as string
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getPokemonByName(name, Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
    getPokemonByGeneration = async (req: Request, res: Response) => {
        const generation = req.query.generation
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getPokemonByGeneration(Number(generation), Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
    getPokemonByType = async (req: Request, res: Response) => {
        const type = req.query.type as string
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getPokemonByType(type, Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
    getPokemonById = async (req: Request, res: Response) => {
        const id = req.query.id
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getPokemonById(Number(id), Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
    getPokemonLegendary = async (req: Request, res: Response) => {
        const legendary = req.query.legendary
        const limit = req.query.limit || 20
        const page = req.query.page || 1
        try {
            const result = await this.pokemonsBusiness.getPokemonLegendary(Number(legendary), Number(limit), Number(page))
            if (!result) {
                throw new CustomError("Error making request", 400)
            }
            res.status(200).json(result)
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.code).send(error.message)
            } else {
                res.status(400).send(error.message)
            }
        }
    }
}