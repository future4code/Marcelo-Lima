import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

const MovieRequestDataCredits = (id) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieCredits()
    }, [])

    const getMovieCredits = () => {
        axios.get(`${BASE_URL}/movie/${id}/credits${API_KEY}&language=pt-br`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log("erro no endpoint getMovieCredits", err)
        })
    }
    return data
}

export default MovieRequestDataCredits