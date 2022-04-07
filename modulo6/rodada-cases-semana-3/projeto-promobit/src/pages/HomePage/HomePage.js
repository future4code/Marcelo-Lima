import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { goToMovieDetails } from "../../router/coordinator"
import { DivMovies, MainDiv, DivGenre, DivButtonGenres } from "./styles"

export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    console.log(listMovies)

    const navigate = useNavigate()
    const goToDetails = (id) => {
        goToMovieDetails(navigate, id)
        console.log("testando", id)
    }

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        return <button key={data.id}>{data.name}</button>

    })

    const renderMovies = listMovies && listMovies.map((data) => {

        return (
            <CardMovie
                key={data.id}
                movie={data}
                changePage={() => goToDetails(data.id)}
            />
        )
    })

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
            </DivMovies>
        </MainDiv>
    )
}