import React from 'react'
import { useProtectedPage } from '../../../hooks/Hooks'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { headers, TOKEN, url } from '../../../constants/Constants'

export default function TripDetailsPage() {
    const [tripDetail, setTripDetail] = useState({})

    useProtectedPage()

    const history = useHistory()
    const params = useParams()

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        axios.get(`${url}/trip/${params.id}`, headers)
        .then((res) => {
            console.log("e", res.data.trip)
            setTripDetail(res.data.trip)
        })
        .catch((err) => {
            console.log("f", err.response)
        })
    }

    const detailTrip = 
        <div>
            <p><b>Nome:</b> {tripDetail.name}</p>
            <p><b>Descrição:</b> {tripDetail.description}</p>
            <p><b>Planeta:</b> {tripDetail.planet}</p>
            <p><b>Duração:</b> {tripDetail.durationInDays}</p>
            <p><b>Data:</b> {tripDetail.date}</p>
        </div>

    return (
        <div>
            <p>TripDetailsPage</p>
            {detailTrip}
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}
