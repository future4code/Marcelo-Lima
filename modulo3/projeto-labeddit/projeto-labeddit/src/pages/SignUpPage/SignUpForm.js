import React from 'react'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { InputsContainer, StyledButton, StyledInput } from './Styled'

const SignUpForm = ({ setRightButtonText }) => {
    const { form, onChange, cleanFields } = useForm({ username: '', email: '', password: '' })

    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form, cleanFields, history, setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <StyledInput
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={'Nome'}
                    variant={'outlined'}
                    fullWidth
                    margin='normal'
                    required
                />
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
                    Cadastrar
                </StyledButton>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm