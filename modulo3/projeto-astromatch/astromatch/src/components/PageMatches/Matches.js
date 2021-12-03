import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import * as C from './Styles'
import Button from '@material-ui/core/Button';

import back from '../img/back.png'

export default function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/matches`)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
            })
    })

    const clearMatches = (() => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/clear`)
            .then((res) => {
                getMatches()
            })
            .catch()
    })

    const getProfileToChoose = (() => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/person`
        axios.get(url)
            .then((res) => {
            })
            .catch((err) => {
            })
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

    return (
        <C.MainDiv>
            <C.DivHeader>
                <img src={back} onClick={props.changePageBack} title="Voltar aos perfis" />
                <h3>AstroMatch</h3>
            </C.DivHeader>
            <C.DivScroll>
            {matches.length !== 0 ? matchesTrue : <C.ImgGif src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/04de2e31234507.564a1d23645bf.gif" />}
            </C.DivScroll>
            <C.DivButton>
                <button onClick={clearMatches}>Limpar matches</button>
            </C.DivButton>
        </C.MainDiv>
    )
}