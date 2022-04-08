import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

const MovieRequestDataDetails = (id) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = () => {
        axios.get(`${BASE_URL}/movie/${id}${API_KEY}&language=pt-br`)
        .then((res) => {
            setData(res.data)
            console.log("details", res.data)
        })
        .catch((err) => {
            console.log("erro no endpoint getMovieDetails", err)
        })
    }
    return data
}

export default MovieRequestDataDetails