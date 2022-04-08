import { DivContainer, PosterImg, DivInfo } from "./styles"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { BASE_URL, IMAGE_URL } from "../../constants/urls"
import axios from "axios"
import { API_KEY } from "../../constants/api_key"
import movieRequestDataDetails from "../../hooks/movieRequestDataDetails"
import MovieRequestDataInfo from "../../hooks/movieRequestDataInfo"

export const MovieDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    const [ movieDetail, setMovieDetail] = useState([])
    const params = useParams()
    
    const detailMovie = movieRequestDataDetails(params.movieId)
    const movieInfos = MovieRequestDataInfo(params.movieId)
    console.log('detailMovie',detailMovie)
    console.log('movie infos', movieInfos)

    //https://api.themoviedb.org/3/movie/634649?api_key=82b0648409145b0cd0fe83234612c192&language=pt-br

    // const movieFilter = listMovies && listMovies.filter((data) => {
    //     return data.id == params.movieId
    // })
    // console.log("vaiiiii", movieFilter[0])
    // const movie = movieFilter[0]
    // const dateMovie = movie && movie.release_date
    // const newDate = dateMovie && dateMovie.split("-")
    // const movieYear = newDate && newDate[0]
    // const renderMovie = (
    //     <DivContainer>
    //         <PosterImg src={`${IMAGE_URL}${movie && movie.poster_path}`} />
    //         <DivInfo>
    //             <h2>{movie && movie.title} ({movieYear})</h2>
    //         </DivInfo>
    //     </DivContainer>
    // )

    return (
        <div>
            {/* {renderMovie} */}
        </div>
    )
}