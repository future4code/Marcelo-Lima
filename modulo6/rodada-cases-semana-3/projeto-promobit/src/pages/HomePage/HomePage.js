import axios from "axios"
import { useContext, useEffect } from "react"
import GlobalStateContext from "../../globalContext/GlobalStateContext"

export const HomePage = () => {
    const {states, setters} = useContext(GlobalStateContext)
    const {listMovies} = states
    console.log("list", listMovies)

    const renderListMovies = listMovies && listMovies.map((data) => {
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
            </div>
        )
    })
    return (
    <div>
        <h1>HomePage</h1>
        {renderListMovies}
    </div>
    )
}