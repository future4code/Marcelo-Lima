import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { goToFeed, goToLogin } from "../routers/Coordinator"

export const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            goToFeed(history)
        }
    }, [])
}