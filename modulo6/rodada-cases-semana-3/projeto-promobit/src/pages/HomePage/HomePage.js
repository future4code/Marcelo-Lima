import axios from "axios"
import { useContext, useEffect } from "react"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { DivMovies, MainDiv, DivGenre, DivButtonGenres } from "./styles"

export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    console.log(movieGenres)

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        return <button key={data.id}>{data.name}</button>

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
                <CardMovie movie={listMovies} />
            </DivMovies>
        </MainDiv>
    )
}