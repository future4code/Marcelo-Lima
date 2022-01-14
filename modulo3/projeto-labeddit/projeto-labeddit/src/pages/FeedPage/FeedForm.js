import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import { StyledButton } from '../LoginPage/Styled'
import { DivFormCreatePost, StyledInput } from './Styled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                toast.success('Post criado com sucesso!', {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch((err) => {
                toast.error(err.response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                })

            })
    }

    return (
        <DivFormCreatePost>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
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