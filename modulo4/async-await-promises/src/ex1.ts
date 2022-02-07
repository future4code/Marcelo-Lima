import Axios from "axios"
import { baseURL } from "./baseURL"

// a) o endpoint GET
// b) tipamos como : Promise<any>
// c)
async function getSubscribers(): Promise<any> {
    const response = await Axios.get(`${baseURL}/subscribers`);
    return response.data
}

const main = async (): Promise<void> => {
    try {
        // const result = await getSubscribers()
        const users = await getSubscribers()
        console.log(users)
    } catch (error: any) {
        console.log(error.message)
    }
}

main()