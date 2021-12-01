import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import * as C from './Styles'

export default function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/matches`)
            .then((res) => {
                setMatches(res.data.matches)
                // console.log("a", res.data)
            })
            .catch((err) => {
                // console.log(err.responde.data)
            })
    })

    const clearMatches = (() => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/clear`)
            .then((res) => {
                getMatches()
                // console.log("h", res.data)
            })
            .catch()
    })

    const matchesTrue = matches.map((item) => {
        return (
            <C.DivMatchProfile>
                <div>
                    <img src={item.photo} />
                </div>
                <div>
                    <p>{item.name}</p>
                </div>
            </C.DivMatchProfile>
        )
    })
    // console.log("g", matches)
    return (
        <C.MainDiv>
            <C.DivHeader>
                <button onClick={props.changePageBack}>voltar</button>
                <h3>astromatch</h3>
            </C.DivHeader>
            {matchesTrue}
            <button onClick={clearMatches}>Apagar</button>
        </C.MainDiv>
    )
}