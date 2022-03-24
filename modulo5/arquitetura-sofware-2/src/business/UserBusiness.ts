import { HashManager } from "../services/hashManager";
import { SignupInputDTO } from "../model/user";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";
import { user } from "../model/user"
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    constructor(
        private userData: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    signupBusiness = async (
        userData: SignupInputDTO
    ): Promise<string> => {
        if (
            !userData.name ||
            !userData.email ||
            !userData.password ||
            !userData.role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const cypherPassword = await this.hashManager.hash(userData.password);

        const newUser = {
            ...userData,
            password: cypherPassword,
            id: this.idGenerator.generateId()
        }

        await this.userData.insertUser(newUser)

        const token: string = this.authenticator.generateToken({
            id: newUser.id,
            role: userData.role
        })

        return token

    }
    loginBusiness = async (
        email: string,
        password: string
    ) => {
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await this.userData.selectUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await this.hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = this.authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        return token
    }
}