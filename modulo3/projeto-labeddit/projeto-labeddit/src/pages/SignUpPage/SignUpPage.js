import React from 'react'
import * as C from './Styled'
import SignUpForm from './SignUpForm'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    return (
        <C.ScreenContainer>
            <h1>Cadastre-se</h1>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </C.ScreenContainer>
    )
}

export default SignUpPage