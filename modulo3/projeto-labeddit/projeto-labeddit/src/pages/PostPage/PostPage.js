import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import axios from 'axios'
import { DivCardContainer, DivTitleName, DivBottomCardPost, StyledInput, StyledButton, TextBodyContainer, DivComentContainer, DivButtonLikeComment } from './Styled'
import useForm from '../../hooks/useForm'

import upBlack from '../../components/img/upBlack.png'
import upWhite from '../../components/img/upWhite.png'
import downBlack from '../../components/img/downBlack.png'
import downWhite from '../../components/img/downWhite.png'

const PostPage = () => {
    useProtectedPage()

    const history = useHistory()
    const params = useParams()
    const { form, onChange, cleanFields } = useForm({ body: '' })
    const [control, setControl] = useState(1)

    const [posts, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, control)

    const CreateComment = (e) => {
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

        let body = {}

        if (vote === true) {
            body = {
                direction: 1
            }
        } else {
            body = {
                direction: -1
            }
        }

        if (userVote === null) {
            axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
                .then((res) => {
                    getPost()
                    console.log('bb', res)
                })
                .catch((err) => {
                    history.push('/error')
                    console.log('nn', err.response)
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

        let body = {}

        if (vote === true) {
            body = {
                direction: 1
            }
        } else {
            body = {
                direction: -1
            }
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
                        {comment.userVote === 1 ? <img src={upBlack} onClick={() => deleteCommentVote(comment.id)} /> : <img src={upWhite} onClick={() => createVoteComment(comment.id, comment.userVote, true)} />}
                        <p>{comment.voteSum === null ? 0 : comment.voteSum}</p>
                        {comment.userVote === -1 ? <img src={downBlack} onClick={() => deleteCommentVote(comment.id)} /> : <img src={downWhite} onClick={() => createVoteComment(comment.id, comment.userVote, false)} />}
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
                            {post.userVote === 1 ? <img src={upBlack} onClick={() => deletePostVote(post.id)} /> : <img src={upWhite} onClick={() => createVote(post.id, post.userVote, true)} />}
                            <p>{!post.voteSum ? 0 : post.voteSum}</p>
                            {post.userVote === -1 ? <img src={downBlack} onClick={() => deletePostVote(post.id)} /> : <img src={downWhite} onClick={() => createVote(post.id, post.userVote, false)} />}
                        </div>
                        {post.body}
                    </TextBodyContainer>
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