import React from 'react'
import { Button, TextField } from '@material-ui/core'
import * as C from './Styled'
import useForm from '../../hooks/useForm'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { goToSignUp } from '../../routers/Coordinator'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()

    const history = useHistory()

    return (
        <C.ScreenContainer>
            <h1>LOGIN</h1>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <C.SignUpButtonContainer>
                <Button
                    type={'submit'}
                    variant="text"
                    color="primary"
                    fullWidth
                    onClick={() => goToSignUp(history)}>
                    Não possui conta? Cadastre-se
                </Button>
            </C.SignUpButtonContainer>

        </C.ScreenContainer>
    )
}

export default LoginPage