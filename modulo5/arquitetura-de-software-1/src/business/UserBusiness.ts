import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { USER_ROLES } from "../entities/UserRole";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const generateId = new IdGenerator()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()

export class UserBusiness {
    signup = async (
        name: string,
        email: string,
        password: string,
        role: USER_ROLES,
    ) => {

        const id: string = generateId.generateId()

        if (!name || !email || !password || !role) {
            throw new Error("preencha corretamente os campos 'name', 'email', 'password' e 'role'")
        }
        if (password.length < 6) {
            throw new Error("a senha deve ter no mínimo 6 caracteres")
        }

        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            throw new Error("este e-mail já existe")
        }

        const token = authenticator.generate({ id, role })
        const passwordHash = new HashManager().createHash(password)

        const newUser: User = new User(id, name, email, passwordHash, role)
        await userDatabase.createUser(newUser)

        return token
    }

    login = async (
        email: string,
        password: string
    ) => {
        if (!email || !password) {
            throw new Error("preencha corretamente os campos 'name', 'email', 'password' e 'role'")
        }
        if (password.length < 6) {
            throw new Error("a senha deve ter no mínimo 6 caracteres")
        }

        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            throw new Error("este e-mail não existe")
        }

        const passwordIdCorrect = new HashManager().compareHash(password, user.getpassword())

        if (!passwordIdCorrect) {
            throw new Error("email ou senha incorretos")
        }

        const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

        return token
    }
    getAllUsers = async () => {
        const result = userDatabase.getAllUsers()
        return result
    }
    deleteUser = async (id: string) => {
        const user = await userDatabase.findUserById(id)
        if (!user) {
            throw new Error("id inexistente")
        }
        await userDatabase.deleteUser(id)
    }
}