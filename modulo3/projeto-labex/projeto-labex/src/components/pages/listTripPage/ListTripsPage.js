import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import * as C from './Styles'
import { useGetList } from '../../../hooks/Hooks'

export default function ListTripsPage() {
    const history = useHistory()

    const goBack = () => {
        history.push("/")
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
                <p>{moment(trip.date).format('DD/MM/YYYY')}</p>
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
