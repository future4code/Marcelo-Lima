import axios from 'axios';
import { useState, useEffect } from 'react'
import Matches from '../PageMatches/Matches';

import iconPerson from '../img/iconPerson1.png'
import positive from '../img/positive.png'
import negative from '../img/negative.png'

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
                alert("Acabaram-se os usuários! Limpe a lista de matches se quiser continuar.")
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
                if (res.data.isMatch) {
                    alert(`Temos um match! Você já pode conversar com ${person.name}!`)
                    // bootbox.alert("Hello world!");
                }

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
        person ?
            <C.CardDiv>
                <C.DivBlur>
                    <img src={person.photo} />
                </C.DivBlur>
                <h3>{person.name}, {person.age}</h3>
                <p>{person.bio}</p>
            </C.CardDiv>
            :
            <C.DivText>
                <p>Não tem mais perfis disponiveis! Para resetar o app, por favor, limpe os matches e atualize a página!</p>
            </C.DivText>

    const pageHome =
        <C.MainDiv>
            <C.DivHeader>
                <h3>AstroMatch</h3>
                <img src={iconPerson} onClick={changePageMatches} title="Ir mara os matches" />
            </C.DivHeader>
            {cardProfile}
            <C.DivButton>
                <img src={negative} onClick={getProfileToChoose} />
                <img src={positive} onClick={choosePerson} />
            </C.DivButton>
        </C.MainDiv>

    return (
        <C.MainContainer>
            {togglePage()}
        </C.MainContainer>
    );
}

export default Home;