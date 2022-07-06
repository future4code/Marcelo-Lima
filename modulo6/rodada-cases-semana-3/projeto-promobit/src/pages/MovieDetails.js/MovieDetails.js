import { DivPage, DivMain, DivContainer, PosterImg, DivInfo, DivCredits, DivCasts, ImgCasts, DivCardCasts, DivTrailer, DivRecommendations, ImgRecommendations, DivCardRecommendations, TextDate } from "./styles"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { useContext, useState } from "react"
import { useParams } from "react-router"
import { BASE_URL, IMAGE_URL } from "../../constants/urls"
import { API_KEY } from "../../constants/api_key"
import movieRequestDataDetails from "../../hooks/movieRequestDataDetails"

export const MovieDetails = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres } = states
    const [movieDetail, setMovieDetail] = useState([])
    const params = useParams()
    console.log(params)

    const detailMovie = movieRequestDataDetails(`${BASE_URL}/movie/${params.movieId}${API_KEY}&language=pt-br`)
    const movieInfos = movieRequestDataDetails(`${BASE_URL}/movie/${params.movieId}/release_dates${API_KEY}`)
    const movieCredits = movieRequestDataDetails(`${BASE_URL}/movie/${params.movieId}/credits${API_KEY}&language=pt-br`)
    const movieVideos = movieRequestDataDetails(`${BASE_URL}/movie/${params.movieId}/videos${API_KEY}&language=pt-br`)
    const movieRecommendations = movieRequestDataDetails(`${BASE_URL}/movie/${params.movieId}/recommendations${API_KEY}&language=pt-br&page=1`)
    console.log(movieRecommendations)

    const movieInfo = movieInfos.results && movieInfos.results.filter((data) => {
        return data.iso_3166_1 === 'BR' || data.iso_3166_1 === 'US' || data.iso_3166_1 === 'ES'
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


    const movieTrailer = movieVideos && movieVideos.results && movieVideos.results.filter((data) => {
        return data.type === "Trailer"
    })

    const renderTrailer = movieTrailer && movieTrailer[0] && <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movieTrailer[0].key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    const renderRecommendations = movieRecommendations && movieRecommendations.results && movieRecommendations.results.map((data) => {
        const dateSplit = data.release_date.split('-')
        let date = ''
        switch (dateSplit[1]) {
            case "01":
                date = "JAN"
                break;
            case "02":
                date = "FEV"
                break;
            case "03":
                date = "MAR"
                break;
            case "04":
                date = "ABR"
                break;
            case "05":
                date = "MAI"
                break;
            case "06":
                date = "JUN"
                break;
            case "07":
                date = "JUL"
                break;
            case "08":
                date = "AGO"
                break;
            case "09":
                date = "SET"
                break;
            case "10":
                date = "OUT"
                break;
            case "11":
                date = "NOV"
                break;
            case "12":
                date = "DEZ"
                break;
            default:
                date = ''
        }
        const newDate = `${dateSplit[2]} ${date} ${dateSplit[0]}`
        return (
            <DivCardRecommendations>
                <ImgRecommendations src={`${IMAGE_URL}${data.poster_path}`} />
                <p><b>{data.title}</b></p>
                <TextDate><b>{newDate}</b></TextDate>
            </DivCardRecommendations>
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
            <DivTrailer>
                <h2>Trailer</h2>
                {renderTrailer}
            </DivTrailer>
            <DivRecommendations>
                <h2>Recomendações</h2>
                <div>
                    {renderRecommendations}
                </div>
            </DivRecommendations>
        </DivPage>
    )
}