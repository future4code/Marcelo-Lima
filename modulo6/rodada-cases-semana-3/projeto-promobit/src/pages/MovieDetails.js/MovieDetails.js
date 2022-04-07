import { DivContainer, PosterImg, DivInfo } from "./styles"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { IMAGE_URL } from "../../constants/urls"

export const MovieDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states

    const params = useParams()
    

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