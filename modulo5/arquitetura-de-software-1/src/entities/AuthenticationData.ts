import { USER_ROLES } from "./UserRole";


export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}  