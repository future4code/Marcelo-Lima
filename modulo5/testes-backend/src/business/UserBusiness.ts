import { SignupInputDTO, User, UserLogInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    private userDatabase: UserRepository
    private idGenerator: IdGeneration
    private hashManager: HashManager
    private authentication: Authenticator
    constructor(userDataImplementation: UserRepository) {
        this.userDatabase = userDataImplementation
        this.idGenerator = new IdGeneration()
        this.hashManager = new HashManager()
        this.authentication = new Authenticator()
    }
    signup = async (input: SignupInputDTO) => {
        const { name, email, password, role } = input

        const id = this.idGenerator.generateId()

        const checkEmailUser = await this.userDatabase.findUserByEmail(email)

        if(checkEmailUser){
            throw new Error("Email já cadastrado")
        }
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
            hashedPassword,
            role
        )

        await this.userDatabase.insert(user)

        const token = this.authentication.generate({ id, role })

        return token
    }
    findUserById = async(input: UserLogInputDTO) => {
        const {token, id} = input

        if( !id){
            throw new Error("Preencha corretamente os campos de 'token' e 'id do usuário'")
        }

        const tokenExist = this.authentication.getTokenData(token)
        if (!tokenExist) {
            throw new Error("Token inválido")
        }
        const user = await this.userDatabase.findUserById(id)

        if(!user){
            throw new Error("Este usuário não existe")
        }
        return user
    }
}
