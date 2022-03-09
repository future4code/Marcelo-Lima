import { UserRepository } from "../business/UserRepository";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository{
    protected TABLE_NAME = "labook_users"
    insert = async (user: User) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(user)
            return user
        } catch (error: any) {
            throw new Error("Erro ao criar usuário no banco de dados")
        }
    }
    findUserByEmail = async (email: string) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select()
                .where({email})
            if(!result[0]){
                return null
            }
            return User.toUserModel(result[0])
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco de dados")
        }
    }
}