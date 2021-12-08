import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { TOKEN, url } from "../constants/Constants"

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = TOKEN

        if (token === null) {
            history.push("/login")
        }
    }, [])
}

export const useGetList = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])
    
    const getTrips = () => {
        axios.get(`${url}/trips`,)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log('b', err.response)
            })
    }
    return trips
}