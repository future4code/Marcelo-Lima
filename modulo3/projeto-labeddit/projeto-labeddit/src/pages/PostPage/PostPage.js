import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import { DivCardContainer, DivTitleName, DivBottomCardPost, StyledInput, StyledButton, TextBodyContainer, DivComentContainer } from './Styled'
import useForm from '../../hooks/useForm'

const PostPage = () => {
    useProtectedPage()

    const params = useParams()
    const { form, onChange, cleanFields } = useForm({ body: '' })

    const [posts, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const CreateComment = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                cleanFields()
                getComments()
            })
            .catch((err) => {
            })
    }

    const commentMapped = comments.map((comment) => {
        return (
            <DivComentContainer key={comment.id}>
                <p><b>{comment.username}:</b></p>
                <p>{comment.body}</p>
            </DivComentContainer>
        )
    })

    const postMapped = posts.map((post) => {
        if (params.id === post.id) {
            return (
                <DivCardContainer key={post.id}>
                    <DivTitleName>
                        <p>Posted by {post.username}</p>
                        <h3>{post.title}</h3>
                    </DivTitleName>
                    <TextBodyContainer>{post.body}</TextBodyContainer>
                    <DivBottomCardPost>
                        <form onSubmit={CreateComment}>
                            <StyledInput
                                variant={'standard'}
                                label='Comentar'
                                type={'text'}
                                name={'body'}
                                value={form.body}
                                onChange={onChange} />
                            <StyledButton
                            type={'submit'}
                            >Comentar</StyledButton>
                        </form>
                        {commentMapped}
                    </DivBottomCardPost>
                </DivCardContainer>
            )
        }
    })

    return (
        <div>
            {postMapped}
        </div>
    )
}

export default PostPage