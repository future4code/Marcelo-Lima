import { Fab, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { AddPostButton, DivBottomCardPost, DivCardContainer, DivFormCreatePost, DivLikeContainer, DivTitleName, StyledInput, TextBodyContainer } from './Styled'
import { useHistory } from 'react-router-dom/'
import AddIcon from '@material-ui/icons/Add';
import { goToPost } from '../../routers/Coordinator'
import useForm from '../../hooks/useForm'
import { StyledButton } from '../LoginPage/Styled'


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const { form, onChange, cleanFields } = useForm({ title: '', body: '' })

    const createPost = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log('vv', res.data)
                cleanFields()
                getPost()
                alert('Post criado com sucesso!')
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const clickButton = (e) => {
        e.stopPropagation()
        console.log("abc")
    }

    const posts = feed.map((post) => {
        return (
            <DivCardContainer key={post.id} onClick={() => onClickPost(post.id)}>
                <DivTitleName>
                    <p>Posted by {post.username}</p>
                    <h3>{post.title}</h3>
                </DivTitleName>
                <TextBodyContainer>{post.body}</TextBodyContainer>
                <DivBottomCardPost>
                    <DivLikeContainer>
                        <button onClick={clickButton}>+</button>
                        <p>{!post.voteSum ? 0 : post.voteSum}</p>
                        <button>-</button>
                    </DivLikeContainer>
                    <p>{!post.commentCount ? 0 : post.commentCount} comentários</p>
                </DivBottomCardPost>
            </DivCardContainer>
        )
    })
    return (
        <div>
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
            {posts}
            {/* <AddPostButton color="primary" aria-label="add">
                <AddIcon />
            </AddPostButton> */}
        </div>
    )
}

export default FeedPage