import React from 'react'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routers/Coordinator'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { ScreenContainer, SignUpButtonContainer } from './Styled'

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <h1>LOGIN</h1>
            <LoginForm setRightButtonText={setRightButtonText} />
            <SignUpButtonContainer>
                <Button
                    type={'submit'}
                    variant="text"
                    color="primary"
                    fullWidth
                    onClick={() => goToSignUp(history)}>
                    Não possui conta? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage