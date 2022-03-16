import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../data/UserDatabase"
import { SignupInputDTO, UserLogInputDTO } from "../model/User"

export class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness(
            new UserDatabase()
        )
    }
    signup = async (req: Request, res: Response) => {
        const { name, email, password, role } = req.body
        const input: SignupInputDTO = {
            name,
            email,
            password,
            role
        }
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({ message: "Usuário cadastrado com sucesso", token })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao tentar fazer o signup")
        }
    }
    findUserById = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id as string
        try {
            const input: UserLogInputDTO = {
                token,
                id
            }
            const result = await this.userBusiness.findUserById(input)
            res.status(200).send({message: "Sucesso", result})
        } catch (error: any) {
            // if (error.message) return res.status(400).send(error.message)
            // res.status(400).send("Erro ao tentar trazer informações do usuário")
            switch(error.message){
                case "Este usuário não existe":
                    res.statusCode = 404;
                break
                default:
                    res.statusCode = 400
            }
        }
    }
}