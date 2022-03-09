import { SignupInputDTO, User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
        private userData: UserRepository
        private idGenerator: IdGeneration
        private hashManager: HashManager
        private authentication: Authenticator
    constructor(userDataImplementation: UserRepository){
        this.userData = userDataImplementation
        this.idGenerator = new IdGeneration()
        this.hashManager = new HashManager()
        this.authentication = new Authenticator()
    }
    signup = async (input: SignupInputDTO) => {
        const { name, email, password } = input

        const id = this.idGenerator.generateId()

        if (!name || !email || !password) {
            throw new Error("Campos vazios")
        }
        if (password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }

        const hashedPassword = this.hashManager.createHash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )

        await this.userData.insert(user)

        const token = this.authentication.generate({ id })

        return token
    }
    login = async (email: string, password: string) => {
        if(!email || !password){
            throw new Error("Preencha corretamente os campos 'email' e 'password'")
        }
        if(password.length < 6){
            throw new Error("A senha deve ter no mínimo 6 caracteres")
        }
        const user = await this.userData.findUserByEmail(email)
        
        if(!user){
            throw new Error("Este e-mail não existe")
        }
        const passwordIdCorrect = this.hashManager.compareHash(password, user.getPassword())

        if(!passwordIdCorrect){
            throw new Error("E-mail ou senha inválidos")
        }

        const token = this.authentication.generate({id: user.getId()})

        return token
    }
}