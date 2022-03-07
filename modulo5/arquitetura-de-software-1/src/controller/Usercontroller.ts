import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness()

export class UserController {
    signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password, role } = req.body

            const token = await userBusiness.signup(name, email, password, role)

            res.status(201).send({ message: "usuário criado com sucesso", token })
        } catch (error: any) {
            switch (error.message) {
                case "preencha corretamente os campos 'name', 'email', 'password' e 'role'":
                    res.statusCode = 422
                    break
                case "a senha deve ter no mínimo 6 caracteres":
                    res.statusCode = 401
                    break
                case "este e-mail já existe":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }

            res.send(error.message)
        }
    }
    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            const token = await userBusiness.login(email, password)

            res.status(201).send({ message: "usuário logado com sucesso", token })
        } catch (error: any) {
            switch (error.message) {
                case "preencha corretamente os campos 'name', 'email', 'password' e 'role'":
                    res.statusCode = 422
                    break
                case "a senha deve ter no mínimo 6 caracteres":
                    res.statusCode = 401
                    break
                case "este e-mail não existe":
                    res.statusCode = 401
                    break
                case "email ou senha incorretos":
                    res.statusCode = 401
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }

            res.send(error.message)
        }
    }
    getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await userBusiness.getAllUsers()
            res.status(200).json(result)
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }
    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            await userBusiness.deleteUser(id)
            res.status(200).send({ message: "Usuário deletado com sucesso" })
        } catch (error: any) {
            switch (error.message) {
                case "id inexistente":
                    res.statusCode = 404
                    break
                default:
                    res.statusCode = 500
                    error.message = "Um erro inesperado ocorreu"
            }

            res.send(error.message)
        }
    }
}