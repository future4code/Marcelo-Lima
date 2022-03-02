import { Follower } from "../entities/Follower";
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
    public async getFollowers(user_id: string, follows_id: string): Promise<Follower>{
        try {
            const result = await BaseDatabase.connection("followers_cookenu")
                .where({user_id, follows_id})
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async insertFollower(follower: Follower): Promise<void> {
        try {
            await BaseDatabase.connection("followers_cookenu").insert(follower)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async deleteFollower(follower: Follower): Promise<void>{
        try {
            await BaseDatabase.connection("followers_cookenu").where(follower).delete()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}