import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { HashManager } from "../services/HashManager";
import generateId from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator";

export async function signup(req: Request, res: Response): Promise<void>{
    try {
        const {name, email, password, role} = req.body
        const id: string = generateId()

        if(!name || !email || !password || !role){
            res.status(422).send("preencha corretamente os campos 'name', 'email', 'password' e 'role'")
        }
        if(password.length < 6){
            res.status(400).send("a senha deve ter no mínimo 6 caracteres")
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if(user){
            res.status(409).send("Este e-mail já existe")
        }
        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})
        const passwordHash = new HashManager().createHash(password)

        const newUser: User = new User(id, name, email, passwordHash, role)
        await userDatabase.createUser(newUser)
    
        res.status(201).send({message: "usuário criado com sucesso", token})
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

