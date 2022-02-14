import Axios from "axios"
import { baseURL } from "./baseURL"
import { getSubscribers, User } from "./ex3"

const message: string = "Passando para avisar que eu consegui!!!"

const sendNotifications = async (users: User[], message: string): Promise<void> => {
    try {

        const result = users.map((user) => {
            return Axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })

        await Promise.all(result)
    } catch {
        console.log("Error")
    }
}

const main = async (): Promise<void> => {
    try {
        const users = await getSubscribers()
         await sendNotifications(users, message)
    } catch (error: any) {
        console.log(error.message)
    }
}

main()