import React from 'react'
import SignUpForm from './SignUpForm'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { ScreenContainer } from './Styled'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = ({ setRightButtonText }) => {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <ToastContainer/>
            <h1>Cadastre-se</h1>
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}

export default SignUpPage