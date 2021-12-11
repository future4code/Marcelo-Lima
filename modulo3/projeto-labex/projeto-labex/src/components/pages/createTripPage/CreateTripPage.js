import React from 'react'
import { useProtectedPage } from '../../../hooks/Hooks'
import { useHistory } from 'react-router-dom'
import useForm from '../../../hooks/Hooks'

import * as C from './Styles'
import axios from 'axios'
import { headers, url } from '../../../constants/Constants'

export default function CreateTripPage() {
    const { form, onChange, cleanFields } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: '',
    })

    const history = useHistory()

    useProtectedPage()

    const goBack = () => {
        history.goBack()
    }

    const createTrip = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
        axios.post(`${url}/trips`, body, headers)
            .then((res) => {
                cleanFields()
                alert("Viagem criada com sucesso!")
            })
            .catch((err) => {
                alert("Ocorreu algum erro, por favor tente novamente!")
            })
    }

    return (
        <C.DivForm>
            <p>CreateTripPage</p>
            <form onSubmit={createTrip}>
                <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                />
                <select placeholder="Planeta" name="planet" value={form.planet} onChange={onChange} required="">
                    <option value="" disabled="" selected="">Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    placeholder="Descrição"
                />
                <input
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    placeholder="Duração de dias"
                />
                <button>Criar</button>
            </form>
            <button onClick={goBack}>Voltar</button>
        </C.DivForm>
    )
}
