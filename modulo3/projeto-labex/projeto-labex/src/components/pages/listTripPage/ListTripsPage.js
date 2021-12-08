import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import * as C from './Styles'
import { useGetList } from '../../../hooks/Hooks'

export default function ListTripsPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplicationFormPage = () => {
        history.push("/applicationForm")
    }

    const tripList = useGetList().map((trip) => {
        return (
            <C.CardDiv>
                <p>{trip.name}</p>
                <p>{trip.description}</p>
                <p>{trip.planet}</p>
                <p>{trip.durationInDays}</p>
                <p>{trip.date}</p>
            </C.CardDiv>
        )
    })

    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            {tripList}
        </div>
    )
}
