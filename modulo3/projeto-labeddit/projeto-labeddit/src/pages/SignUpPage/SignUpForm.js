import React from 'react'
import { Button, TextField } from '@material-ui/core'
import * as C from './Styled'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { StyledButton } from './Styled'

const SignUpForm = ({setRightButtonText}) => {
    const { form, onChange, cleanFields } = useForm({username: '', email: '', password: '' })

    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, cleanFields, history, setRightButtonText)
    }

    return (
            <C.InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={'username'}
                        value={form.username}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        margin='normal'
                        required
                    />
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
                        Cadastrar
                    </StyledButton>
                </form>
            </C.InputsContainer>
    )
}

export default SignUpForm