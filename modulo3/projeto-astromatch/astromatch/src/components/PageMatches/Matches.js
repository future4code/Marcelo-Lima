import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import * as C from './Styles'
import Button from '@material-ui/core/Button';
import { Add} from '@material-ui/icons';

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
                <Add onClick={props.changePageBack}/>
                <h3>AstroMatch</h3>
            </C.DivHeader>
            {matchesTrue}
            <C.DivButton>
            <Button variant="contained" color="success" onClick={clearMatches}>Apagar</Button>
            </C.DivButton>
        </C.MainDiv>
    )
}