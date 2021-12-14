import React from 'react'
import { Button, TextField } from '@material-ui/core'
import * as C from './Styled'
import { StyledButton } from './Styled'

import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom/'

const LoginForm = ({setRightButtonText}) => {
    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })

    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, cleanFields, history, setRightButtonText)
    }

    return (
        <C.InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    fullWidth
                    margin='normal'
                    type={'email'}
                    required
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    fullWidth
                    margin='normal'
                    type={'password'}
                    required
                />
                <StyledButton
                    type={'submit'}
                    variant="contained"
                    color="primary"
                    fullWidth>
                    Entrar
                </StyledButton>
            </form>
        </C.InputsContainer>
    )
}

export default LoginForm