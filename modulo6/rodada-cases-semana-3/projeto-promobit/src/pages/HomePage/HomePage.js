import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { goToMovieDetails } from "../../router/coordinator"
import { DivMovies, MainDiv, DivGenre, DivButtonGenres } from "./styles"
import Pagination from '@mui/material/Pagination';

export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    const [movieFilter, setMovieFilter] = useState([])
    const [control, setControl] = useState(false)

    const navigate = useNavigate()
    const goToDetails = (id) => {
        goToMovieDetails(navigate, id)
    }

    const onChangePagination = (event, value) => {
        setters.setPagination(value)
        console.log(value)
    }

    const onClickMovieFilter = (movieId) => {
        // console.log(listMovies)
        // for(let movie of listMovies){
        //     if(movie.genre_ids.includes(movieId)){
        //         console.log('entrou')
        //         const index = movie.genre_ids.indexOf(movieId)
        //         if (index === 0) {
        //             setMovieFilter([...movieFilter.slice(index + 1)]);
        //         } else {
        //             setMovieFilter([...movieFilter.slice(0, index), ...movieFilter.slice(index + 1)])
        //         }
        //     }
        // }
        // if(movieFilter.includes(movieId)){
        //     console.log('entrou')
        //     const index = movieFilter.indexOf(movieId)
        //     if (index === 0) {
        //         setMovieFilter([...movieFilter.slice(index + 1)]);
        //     } else {
        //         setMovieFilter([...movieFilter.slice(0, index), ...movieFilter.slice(index + 1)])
        //     }
        // }
        const result = movieFilter.filter((data) => data !== movieId)
        setMovieFilter([...result, movieId])
        console.log('movieId', movieId)
    }

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        return <button key={data.id} onClick={() => onClickMovieFilter(data.id)}>{data.name}</button>
    })

    const renderMovies = listMovies && listMovies.map((data) => {
        console.log("data", data)
        return (
            <CardMovie
                key={data.id}
                movie={data}
                changePage={() => goToDetails(data.genre_ids)}
            />
        )
    })
    // .filter((data) => {
    //     const result = listMovies.map((movie) => {

    //     })
    // })

    console.log('movieFilter', movieFilter)
    return (
        <MainDiv>
            <DivGenre>
                <h1>Milhões de filmes, séries e pessoas para descobrir, Explore já.</h1>
                <p>FILTRE POR:</p>
                <DivButtonGenres>
                    {renderMovieGenres}
                </DivButtonGenres>
            </DivGenre>
            <DivMovies>
                {renderMovies}
                <Pagination count={500} defaultPage={1} onChange={onChangePagination} />
            </DivMovies>
        </MainDiv>
    )
}