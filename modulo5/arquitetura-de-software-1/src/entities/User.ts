import { USER_ROLES } from "./UserRole"

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getEmail() {
        return this.email
    }
    public getpassword() {
        return this.password
    }
    public getRole() {
        return this.role
    }
} 