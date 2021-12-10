import React from 'react'
import { useProtectedPage } from '../../../hooks/Hooks'
import { useHistory } from 'react-router-dom'

import * as C from './Styles'

export default function CreateTripPage() {

    const history = useHistory()

    useProtectedPage()

    const goBack = () => {
        history.goBack()
    }

    return (
        <C.DivForm>
            <p>CreateTripPage</p>
            <input placeholder="Nome" />
            <select placeholder="Planeta" name="planet" required="">
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
            <input type="date" />
            <input placeholder="Descrição" />
            <input placeholder="Duração de dias" />
            <button onClick={goBack}>Voltar</button>
        </C.DivForm>
    )
}
