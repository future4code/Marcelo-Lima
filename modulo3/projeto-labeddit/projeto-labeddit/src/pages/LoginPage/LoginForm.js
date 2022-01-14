import React from 'react'
import useForm from '../../hooks/useForm'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom/'
import { StyledButton, StyledInput, InputsContainer } from './Styled'

const LoginForm = ({ setRightButtonText }) => {
    const { form, onChange, cleanFields } = useForm({ email: '', password: '' })

    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, cleanFields, history, setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <StyledInput
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
                <StyledInput
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
        </InputsContainer>
    )
}

export default LoginForm