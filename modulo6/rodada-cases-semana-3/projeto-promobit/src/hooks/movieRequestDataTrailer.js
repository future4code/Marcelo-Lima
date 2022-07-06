import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

const MovieRequestDataTrailer = (id) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieTrailer()
    }, [])

    const getMovieTrailer = () => {
        axios.get(`${BASE_URL}/movie/${id}/videos${API_KEY}&language=pt-br`)
        .then((res) => {
            setData(res.data.results)
        })
        .catch((err) => {
            console.log("erro no endpoint getMovieDetails", err)
        })
    }
    return data
}

export default MovieRequestDataTrailer