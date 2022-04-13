import { useState, useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios"
import { API_KEY } from "../constants/api_key"
import { BASE_URL, MOVIE_GENRE } from "../constants/urls"

export const GlobalState = (props) => {
    const [listMovies, setListMovies] = useState([])
    const [movieGenres, setMovieGenres] = useState([])
    const [pagination, setPagination] = useState(1)
    

    useEffect(() => {
        getMovies()
        getMoviesGenre()
    }, [pagination])

    const getMovies = () => {
        axios.get(`${BASE_URL}/movie/popular${API_KEY}&language=pt-br&page=${pagination}`)
            .then((res) => {
                setListMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getMoviesGenre = () => {
        axios.get(`${MOVIE_GENRE}${API_KEY}&language=pt-br`)
            .then((res) => {
                setMovieGenres(res.data.genres)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const states = { listMovies, movieGenres }
    const setters = { setListMovies, setMovieGenres, setPagination }
    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}