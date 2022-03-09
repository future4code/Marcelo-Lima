import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response): Promise<void>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            res.status(422).send("preencha corretamente os campos 'name', 'email', 'password' e 'role'")
        }
        if(password.length < 6){
            res.status(400).send("a senha deve ter no mínimo 6 caracteres")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if(user){
            res.status(409).send("Este e-mail não existe")
        }

        const passwordIdCorrect = new HashManager().compareHash(password, user.getpassword())

        if(!passwordIdCorrect){
            res.status(401).send("email ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})
    
        res.status(201).send({message: "usuário logado com sucesso", token})
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
