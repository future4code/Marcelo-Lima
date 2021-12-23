import { useHistory } from "react-router"
import { useEffect } from "react"
import { goToFeed } from "../routers/Coordinator"

export const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            goToFeed(history)
        }
    }, [])
}