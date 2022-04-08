import axios from "axios"
import { useEffect, useState } from "react"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

const MovieRequestDataInfo = (id) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMovieInfos()
    }, [])

    //https://api.themoviedb.org/3/movie/634649/release_dates?api_key=82b0648409145b0cd0fe83234612c192

    const getMovieInfos = () => {
        axios.get(`${BASE_URL}/movie/${id}/release_dates${API_KEY}`)
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

export default MovieRequestDataInfo