import { DivPage, DivMain, DivContainer, PosterImg, DivInfo, DivCredits, DivCasts, ImgCasts, DivCardCasts } from "./styles"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { BASE_URL, IMAGE_URL } from "../../constants/urls"
import axios from "axios"
import { API_KEY } from "../../constants/api_key"
import movieRequestDataDetails from "../../hooks/movieRequestDataDetails"
import MovieRequestDataInfo from "../../hooks/movieRequestDataInfo"
import MovieRequestDataCredits from "../../hooks/movieRequestDataCredits"
import MovieRequestDataTrailer from "../../hooks/movieRequestDataTrailer"

export const MovieDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    const [movieDetail, setMovieDetail] = useState([])
    const params = useParams()

    const detailMovie = movieRequestDataDetails(params.movieId)
    const movieInfos = MovieRequestDataInfo(params.movieId)
    const movieCredits = MovieRequestDataCredits(params.movieId)
    const movieVideos = MovieRequestDataTrailer(params.movieId)

    const movieInfo = movieInfos.results && movieInfos.results.filter((data) => {
        return data.iso_3166_1 === 'BR'
    })
    const datePermission = movieInfo && movieInfo[0].release_dates[0].certification

    const dateMovie = detailMovie && detailMovie.release_date
    const newDate = dateMovie && dateMovie.split("-")
    const movieYear = newDate && newDate[0]

    const releaseDate = movieInfo && movieInfo[0].release_dates[0].release_date.split('T')[0]
    const formatDate = releaseDate && releaseDate.split('-')
    const newReleaseDate = formatDate && `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`

    const genresMovie = detailMovie.genres && detailMovie.genres.map((data) => {
        return data.name
    })

    const convertTime = (minutes) => {
        const time = Math.floor(minutes / 60);
        const min = minutes % 60;
        const textTime = (`${time}`).slice(-2);
        const textMin = (`${min}`).slice(-2);

        return `${textTime}h ${textMin}m`;
    };

    const creditsFilter = movieCredits.crew && movieCredits.crew.filter((data) => {
        return data.job === "Director" || data.job === "Characters" || data.job === "Screenplay"
    })

    const renderCredits = creditsFilter && creditsFilter.map((data) => {
        return (
            <div >
                <p><b>{data.name}</b></p>
                <p>{data.job}</p>
            </div>
        )

    })

    const renderDetailMovie = detailMovie && (
        <DivMain>
            <DivContainer>
                <PosterImg src={`${IMAGE_URL}${detailMovie && detailMovie.poster_path}`} />
                <DivInfo>
                    <h2>{detailMovie && detailMovie.title} ({movieYear})</h2>
                    <div>
                        <p>
                            {datePermission} - {newReleaseDate} (BR) - {genresMovie && genresMovie[0]}, {genresMovie && genresMovie[1]}, {genresMovie && genresMovie[2]}, {genresMovie && genresMovie[3]} - {detailMovie && convertTime(detailMovie.runtime)}
                        </p>
                        <p>Avaliação dos usuários</p>
                    </div>
                    <h3>Sinopse</h3>
                    <p>{detailMovie && detailMovie.overview}</p>
                    <DivCredits>
                        {renderCredits}
                    </DivCredits>
                </DivInfo>
            </DivContainer>
        </DivMain>
    )

    const renderCastMovie = movieCredits.cast && movieCredits.cast.map((data) => {
        return (
            <DivCardCasts>
                <ImgCasts src={`${IMAGE_URL}${data.profile_path}`} />
                <p><b>{data.name}</b></p>
                <p>{data.character}</p>
            </DivCardCasts>
        )
    })

    const movieTrailer = movieVideos && movieVideos.filter((data) => {
        return data.name === "Trailer Oficial Dublado"
    })

    const renderTrailer = movieTrailer && movieTrailer.map((data) => {
        return (
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    })


    return (
        <DivPage>
            {renderDetailMovie}
            <DivCasts>
                <h2>Elenco original</h2>
                <div>
                    {renderCastMovie}
                </div>
            </DivCasts>
            <div>
                <h2>Trailer</h2>
                {renderTrailer}
            </div>
        </DivPage>
    )
}
