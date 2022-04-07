import { useState, useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios"
import { API_KEY } from "../constants/api_key"
import { BASE_URL } from "../constants/urls"

export const GlobalState = (props) => {
    const [listMovies, setListMovies ] = useState([])

    const testeApi = () => {
        axios.get(`${BASE_URL}/movie/popular${API_KEY}&language=pt-br&page=1`)
        .then((res)=>{
          setListMovies(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    
      useEffect(() => {
        testeApi()
      },[])

      const states = {listMovies}
      const setters = {setListMovies}
    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}