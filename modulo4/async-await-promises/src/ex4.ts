import Axios from "axios"
import { baseURL } from "./baseURL"

type News = {
    title: string,
    content: string,
    date: number
}

const news: News = {
    title: "A história se repete",
    content: "A história está se repetindo novamente, é uma pena!",
    date: new Date().getTime()
}

const createNews = async (news: any): Promise<void> => {
    await Axios.put(`${baseURL}/news`, news)
}

createNews(news)




// type News = {
//     subscriberId: number,
//     message: string
// }

// const news: News = {
//     subscriberId: Date.now(),
//     message: "seja bem vindoooooooooo!"
// }

// const createNews = async (news: any): Promise<any> => {
//     await Axios.post(`${baseURL}/notifications`, news)
// }

// createNews(news)