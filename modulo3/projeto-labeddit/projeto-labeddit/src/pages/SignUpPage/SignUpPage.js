import React from 'react'
import SignUpForm from './SignUpForm'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { ScreenContainer } from './Styled'

const SignUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <h1>Cadastre-se</h1>
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}

export default SignUpPage