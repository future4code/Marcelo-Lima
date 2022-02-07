import Axios from "axios";
import { baseURL } from "./baseURL";

// a) não
// b)
// c)

export type User = {
	id: string;
	name: string;
	email: string;
}

export const getSubscribers = async (): Promise<User[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}
