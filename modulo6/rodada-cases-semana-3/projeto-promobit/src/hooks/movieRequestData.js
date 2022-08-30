import axios from "axios"
import { useEffect, useState } from "react"

const MovieRequestData = (link) => {
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

export default MovieRequestData