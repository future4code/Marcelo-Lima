import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { CardMovie } from "../../components/CardMovie/CardMovie"
import GlobalStateContext from "../../globalContext/GlobalStateContext"
import { goToMovieDetails } from "../../router/coordinator"
import { DivMovies, MainDiv, DivGenre, DivButtonGenres, ButtonRemove, ButtonAdd } from "./styles"
import Pagination from '@mui/material/Pagination';

export const HomePage = () => {
    const { states, setters } = useContext(GlobalStateContext)
    const { listMovies, movieGenres, filter } = states

    const navigate = useNavigate()
    const goToDetails = (id) => {
        goToMovieDetails(navigate, id)
    }

    const onChangePagination = (event, value) => {
        setters.setPagination(value)
        // console.log(value)
    }

    const addFilter = (setFilter, genreId) => {
        // console.log("oi")
        if(!filter) {
            console.log('asdfsdf')
            setFilter([...filter, genreId])
        } else {
            console.log('coisado', filter)
            const idExist = filter.find(genMovId => genMovId === genreId)
            console.log('aoi', idExist)
            if(idExist){
                console.log('adedonha')
                return
            }
            setFilter([...filter, genreId])
        }
    }

    const removeFilter = (filter, setFilter, genreId) => {
        // console.log("re")
        const index = filter.findIndex(i => i === genreId)
        if(filter[index] !== -1){
            filter.splice(index, 1)
        }
        setFilter(filter)
    }

    const renderMovieGenres = movieGenres && movieGenres.map((data) => {
        let idExist = filter.find(movie => movie === data.id)
        // console.log("idExist", idExist)
        if(idExist){
            // console.log("botRemove")
            return <ButtonRemove key={data.id} onClick={() => removeFilter(filter, setters.setFilter, data.id)}>{data.name}</ButtonRemove>
        }else {
            // console.log("botAdd")
            return <ButtonAdd key={data.id} onClick={() => addFilter(setters.setFilter, data.id)}>{data.name}</ButtonAdd>
        }
        
        
        // return <button key={data.id}>{data.name}</button>

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
            <Pagination count={500} defaultPage={1}  onChange={onChangePagination}/>
            </DivMovies>
        </MainDiv>
    )
}