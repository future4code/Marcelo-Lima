import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public async createUser(user: User): Promise<void>{
        try {
            await BaseDatabase.connection("User_Arq")
                .insert({
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
    public async findUserByEmail(email: string): Promise<User>{
        try {
            const result = await BaseDatabase.connection("User_Arq")
                .select("*")
                .where({email})
            return result[0] && User.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async findUserById(id: string): Promise<User>{
        try {
            const result = await BaseDatabase.connection("User_Arq")
                .select("*")
                .where({id})
            return result[0] && User.toUserModel(result[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getAllUsers(): Promise<User[]>{
        try {
            const result = await BaseDatabase.connection("User_Arq")
                .select("*")
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async deleteUser(id: string): Promise<void>{
        try {
            await BaseDatabase.connection("User_Arq")
                .where({id})
                .del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}