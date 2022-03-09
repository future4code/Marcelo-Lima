import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { SignupInputDTO } from "../model/user"

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }
    signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password, role } = req.body

            const input: SignupInputDTO = {
                name,
                email,
                password,
                role
            }

            const token: string = await this.userBusiness.signupBusiness(input)

            res
                .status(201)
                .send({
                    message: "Usuário criado!",
                    token
                })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    login = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { email, password } = req.body

            const token: string = await this.userBusiness.loginBusiness(email, password)

            res.send({
                message: "Usuário logado!",
                token
            })

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}