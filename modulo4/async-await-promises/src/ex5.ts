import Axios from "axios"
import { baseURL } from "./baseURL"
import { getSubscribers, User } from "./ex3"

const message: string = "Passando para avisar que eu consegui!!!"

const sendNotifications = async (users: User[], message: string): Promise<void> => {
    try {
        for (let user of users) {
            await Axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        }
        console.log("All notifications sent")
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