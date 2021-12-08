import React from 'react'
import { useProtectedPage } from '../../../hooks/Hooks'

export default function CreateTripPage() {

    useProtectedPage()

    return (
        <div>
            <p>CreateTripPage</p>
        </div>
    )
}
