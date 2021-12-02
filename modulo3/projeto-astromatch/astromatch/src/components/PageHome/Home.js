import axios from 'axios';
import { useState, useEffect } from 'react'
import Matches from '../PageMatches/Matches';
import Styles from './Styles'
import { AccountCircle, Favorite, ThumbDown, ThumbUp, ThumbUpOffAlt, ThumbDownOffAlt} from '@material-ui/icons';


import * as C from './Styles'


function Home() {
    const [person, setPerson] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    // FUNÇÕES -------------------------------------------------------------------------

    const getProfileToChoose = (() => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/person`
        axios.get(url)
            .then((res) => {
                setPerson(res.data.profile)
            })
            .catch((err) => {
            })
    })

    const choosePerson = (() => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Marcelo/choose-person`
        const body = {
            id: person.id,
            choice: true
        }
        axios.post(url, body)
            .then((res) => {
                getProfileToChoose()
            })
            .catch((err) => {
            })
    })

    const changePageMatches = (() => {
        setPage(2)

    })

    const changePageBack = (() => {
        setPage(1)
    })

    const togglePage = (() => {
        if (page === 1) {
            return pageHome
        } else if (page === 2) {
            return <Matches changePageBack={changePageBack} />
        }
    })

    // VARIAVEIS -------------------------------------------------------------------------

    const cardProfile =
        <C.CardDiv>
            <C.DivBlur>
                <img src={person.photo} />
                </C.DivBlur>
                <h3>{person.name}, {person.age}</h3>
                <p>{person.bio}</p>
                
        </C.CardDiv>

 

    const pageHome =
        <C.MainDiv>
            <C.DivHeader>
                <h3>AstroMatch</h3>
                <AccountCircle onClick={changePageMatches}/>
            </C.DivHeader>
            {cardProfile}
            <C.DivButton>
                <ThumbDown onClick={getProfileToChoose}/>
                <ThumbUp onClick={choosePerson}/>
            </C.DivButton>
        </C.MainDiv>

    return (
        <C.MainContainer>
            {togglePage()}
        </C.MainContainer>
    );
}

export default Home;