import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { useGetList, useProtectedPage } from '../../../hooks/Hooks'

import * as C from './Styles'

export default function AdminHomePage() {
    useProtectedPage()

    const history = useHistory()
  
    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTripPage = () => {
        history.push("/createTrip")
    }

    const logout = () => {
        history.push("/login")
        localStorage.clear()
    }

    const listNameTrips = useGetList().map((trip) => {
        return (
            <C.TripDiv
                key={trip.id}
                onClick={() => {history.push(`/tripDetails/${trip.id}`)}}>
                <p>{trip.name}</p>
                <button>X</button>
            </C.TripDiv>
        )
    })

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            {listNameTrips}
        </div>
    )
}
