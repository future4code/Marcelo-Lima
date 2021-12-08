import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory()

    const goToListTripPage = () => {
        history.push("/listTrips")
    }

    const goToLoginPage = () => {
        history.push("/adminHome")
    }

    return (
        <div>
            <p>HomePage</p>
            <button onClick={goToListTripPage}>listTrips</button>
            <button onClick={goToLoginPage}>Área de Admin</button>
        </div>
    )
}
