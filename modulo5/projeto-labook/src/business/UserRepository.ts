import {User} from "../model/User"

export interface UserRepository{
    insert(user: User):Promise<User>
    findUserByEmail(email: string):Promise<User | null>
}