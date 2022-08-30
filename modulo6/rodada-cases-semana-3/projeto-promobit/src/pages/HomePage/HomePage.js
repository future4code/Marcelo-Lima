import { useContext } from "react"
import { useNavigate } from "react-router"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { goToMovieDetails } from "../../router/coordinator"
import { DivMovies, MainDiv, DivGenre, DivButtonGenres, DivPagination, ButtonRemove, ButtonAdd } from "./styles"
import Pagination from '@mui/material/Pagination';

export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres, filter } = states

    const navigate = useNavigate()

    const onChangePagination = (event, value) => {
        setters.setPagination(value)
    }

    const addFilter = (setFilter, genreId) => {
        setFilter([...filter, genreId])
    }

    const removeFilter = (filter, setFilter, genreId) => {
        const newFilter = filter.filter(id => id !== genreId)
        setFilter(newFilter)
    }

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        let idExist = filter.find(movieId => movieId === data.id)
        if (idExist) {
            return <ButtonRemove key={data.id} onClick={() => removeFilter(filter, setters.setFilter, data.id)}>{data.name}</ButtonRemove>
        } else {
            return <ButtonAdd key={data.id} onClick={() => addFilter(setters.setFilter, data.id)}>{data.name}</ButtonAdd>
        }
    })

    const renderMovies = listMovies && listMovies.filter(item => {
        if (filter.length === 0) {
            return item
        } else {
            return item.genre_ids.find(item1 => filter.find(item2 => item1 === item2))
        }
    }).map((data) => {
        return (
            <CardMovie
                key={data.id}
                movie={data}
                changePage={() => goToMovieDetails(navigate, data.id)}
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
            <DivPagination>
                <Pagination count={500} defaultPage={1} onChange={onChangePagination} />
            </DivPagination>
        </MainDiv>
    )
}