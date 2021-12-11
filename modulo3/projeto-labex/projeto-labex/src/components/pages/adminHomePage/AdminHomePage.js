import axios from 'axios'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { headers, url } from '../../../constants/Constants'
import { useGetList, useProtectedPage } from '../../../hooks/Hooks'

import * as C from './Styles'

export default function AdminHomePage() {
    const [trips, setTrips] = useState([])

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

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(`${url}/trips`,)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log('b', err.response)
            })
    }

    const deleteTrip = (id) => {
        axios.delete(`${url}/trips/${id}`, headers)
            .then((res) => {
                alert("Viagem deletada com sucesso!")
                getTrips()
            })
            .catch((err) => [
                console.log("j", err.response)
            ])
    }


    const listNameTrips = trips.map((trip) => {
        return (
            <C.TripDiv
                key={trip.id}
            >
                <p onClick={() => { history.push(`/tripDetails/${trip.id}`) }}>{trip.name}</p>
                <button onClick={() => deleteTrip(trip.id)}>X</button>
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
