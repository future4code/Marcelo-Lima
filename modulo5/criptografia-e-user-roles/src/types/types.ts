export enum User_Role {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type user = {
    id: string
    email: string
    password: string
    name: string
    nickname: string
    role: User_Role
}

export interface AuthenticationData {
    id: string,
    role: User_Role
}