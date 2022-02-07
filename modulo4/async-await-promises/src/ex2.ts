import Axios from "axios";
import { baseURL } from "./baseURL";

const getSubscribers = async (): Promise<any[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    return response.data
}

// a) na função nomeada o "async" vem antes da função