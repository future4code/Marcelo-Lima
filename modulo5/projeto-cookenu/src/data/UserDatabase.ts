import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User) {
        try {
            await BaseDatabase.connection("users_cookenu").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getpassword(),
                role: user.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("users_cookenu")
                .select("*")
                .where({ email })

            return user[0] && User.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getProfile(id: string): Promise<any> {
        try {
            const profile = await BaseDatabase.connection("users_cookenu")
                .select("id", "name", "email", "role")
                .where({ id })
            return profile[0] && User.toUserModel(profile[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}