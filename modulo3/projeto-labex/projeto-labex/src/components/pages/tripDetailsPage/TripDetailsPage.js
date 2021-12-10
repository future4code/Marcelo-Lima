import React from 'react'
import { useProtectedPage } from '../../../hooks/Hooks'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { headers, TOKEN, url } from '../../../constants/Constants'
import * as C from './Styles'
import moment from 'moment'

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
                setTripDetail(res.data.trip)
            })
            .catch((err) => {
            })
    }

    const decideCand = (id, res) => {
        if (res === "approv") {
            const body = {
                approve: true
            }
            axios.put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, headers)
                .then((res) => {
                    getTripDetail()
                    alert("Candidato aprovado com sucesso!")
                })
                .catch((err) => {
                })
        } else if (res === "reprov") {
            const body = {
                approve: false
            }
            axios.put(`${url}/trips/${params.id}/candidates/${id}/decide`, body, headers)
                .then((res) => {
                    getTripDetail()
                    alert("Candidato recusado com sucesso!")
                })
                .catch((err) => {
                })
        }
    }

    const detailTrip =
        <div>
            <p><b>Nome:</b> {tripDetail.name}</p>
            <p><b>Descrição:</b> {tripDetail.description}</p>
            <p><b>Planeta:</b> {tripDetail.planet}</p>
            <p><b>Duração:</b> {tripDetail.durationInDays}</p>
            <p ><b>Data:</b> {moment(tripDetail.date).format('DD/MM/YYYY')}</p>
        </div>

    const candidate = tripDetail.candidates && tripDetail.candidates.map((candidate) => {
        return (
            <C.DivCandidate key={candidate.id}>
                <p><b>Nome: </b>{candidate.name}</p>
                <p><b>Profissão: </b>{candidate.profession}</p>
                <p><b>Idade: </b>{candidate.age}</p>
                <p><b>País: </b>{candidate.country}</p>
                <p><b>Descrição: </b>{candidate.applicationText}</p>
                <button onClick={() => decideCand(candidate.id, "approv")}>Aprovar</button>
                <button onClick={() => decideCand(candidate.id, "reprov")}>Recusar</button>
            </C.DivCandidate>
        )
    })

    const approved = tripDetail.approved && tripDetail.approved.map((candidate) => {
        return (
            <div key={tripDetail.id}>
                <li>{candidate.name}</li>
            </div>
        )
    })

    return (
        <div>
            <p>TripDetailsPage</p>
            {detailTrip}
            <button onClick={goBack}>Voltar</button>
            {candidate}
            {approved}
        </div>
    )
}
