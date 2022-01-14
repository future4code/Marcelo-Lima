import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import useForm from '../../hooks/useForm'
import loading from '../../components/img/loading.gif'
import {
    DivCardContainer,
    DivTitleName,
    DivBottomCardPost,
    StyledInput,
    StyledButton,
    TextBodyContainer,
    DivComentContainer,
    DivButtonLikeComment,
    StyledButtonLikeUpBlack,
    StyledButtonLikeUpWhite,
    StyledButtonLikeDownBlack,
    StyledButtonLikeDownWhite,
    StyledLoading
} from './Styled'

const PostPage = () => {
    useProtectedPage()

    const history = useHistory()
    const params = useParams()
    const { form, onChange, cleanFields } = useForm({ body: '' })
    const [control, setControl] = useState(1)

    const [posts, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, control)

    const createComment = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                cleanFields()
                setControl(+1)
                getComments()
            })
            .catch((err) => {
            })
    }

    const createVote = (id, userVote, vote) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        let body = {
            direction: vote
        }

        if (userVote === null) {
            axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPost()
                })
                .catch((err) => {
                    history.push('/error')
                })
        } else if (userVote === -body.direction) {
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPost()
                })
                .catch((err) => {
                    history.push('/error')
                })
        }
    }

    const deletePostVote = (id) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
            .then((res) => {
                getPost()
            })
            .catch((err) => {
                history.push('/error')
            })
    }

    const createVoteComment = (id, userVote, vote) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const body = {
            direction: vote
        }

        if (userVote === null) {
            axios.post(`${BASE_URL}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    getComments()
                })
                .catch((err) => {
                    history.push('/error')
                })
        } else if (userVote === -body.direction) {
            axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
                .then((res) => {
                    getComments()
                })
                .catch((err) => {
                    history.push('/error')
                })
        }
    }

    const deleteCommentVote = (id) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.delete(`${BASE_URL}/comments/${id}/votes`, headers)
            .then((res) => {
                getComments()
            })
            .catch((err) => {
                history.push('/error')
            })
    }

    const commentMapped = comments.map((comment) => {
        return (
            <DivComentContainer key={comment.id}>
                <div>
                    <p><b>{comment.username}:</b></p>
                    <p>{comment.body}</p>
                </div>
                <DivButtonLikeComment>
                    <div>
                        {comment.userVote === 1 ? <StyledButtonLikeUpBlack onClick={() => deleteCommentVote(comment.id)} /> : <StyledButtonLikeUpWhite onClick={() => createVoteComment(comment.id, comment.userVote, 1)} />}
                        <p>{comment.voteSum === null ? 0 : comment.voteSum}</p>
                        {comment.userVote === -1 ? <StyledButtonLikeDownBlack onClick={() => deleteCommentVote(comment.id)} /> : <StyledButtonLikeDownWhite onClick={() => createVoteComment(comment.id, comment.userVote, -1)} />}
                    </div>
                </DivButtonLikeComment>
            </DivComentContainer>
        )
    })

    const postMapped = posts && posts.map((post) => {
        if (params.id === post.id) {
            return (
                <DivCardContainer key={post.id}>
                    <DivTitleName>
                        <p>Posted by {post.username}</p>
                        <h3>{post.title}</h3>
                    </DivTitleName>
                    <TextBodyContainer>
                        <div>
                        {post.userVote === 1 ? <StyledButtonLikeUpBlack onClick={() => deletePostVote(post.id)} /> : <StyledButtonLikeUpWhite onClick={() => createVote(post.id, post.userVote, 1)} />}
                        <p>{!post.voteSum ? 0 : post.voteSum}</p>
                        {post.userVote === -1 ? <StyledButtonLikeDownBlack onClick={() => deletePostVote(post.id)} /> : <StyledButtonLikeDownWhite onClick={() => createVote(post.id, post.userVote, -1)} />}
                        </div>
                        {post.body}
                    </TextBodyContainer>
                    <DivBottomCardPost>
                        <form onSubmit={createComment}>
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
            {posts.length ? postMapped : <StyledLoading><img src={loading} /></StyledLoading>}
        </div>
    )
}

export default PostPage