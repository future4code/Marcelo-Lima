import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { StyledButton } from '../LoginPage/Styled'
import { DivFormCreatePost, StyledInput } from './Styled'

const FeedForm = (props) => {

    const { form, onChange, cleanFields } = useForm({ title: '', body: '' })

    const createPost = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                cleanFields()
                props.getPost()
                alert('Post criado com sucesso!')
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }

    return (
        <DivFormCreatePost>
            <form onSubmit={createPost}>
                <StyledInput
                    variant={'outlined'}
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    label={'Título'}
                    required
                    margin='normal'
                />
                <StyledInput
                    variant={'outlined'}
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={'Texto'}
                    margin='normal'
                    multiline
                    rows={7}
                />
                <StyledButton
                    type={'submit'}
                    variant='contained'
                    color="primary">Criar post</StyledButton>
            </form>
        </DivFormCreatePost>
    )
}

export default FeedForm