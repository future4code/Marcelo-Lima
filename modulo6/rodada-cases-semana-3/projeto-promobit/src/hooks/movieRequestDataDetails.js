import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

const MovieRequestDataDetails = (link) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieDetails()
    }, [])

    const getMovieDetails = () => {
        axios.get(link)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log("erro no endpoint getMovieDetails", err)
        })
    }
    return data
}

export default MovieRequestDataDetails