import { Fab, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { AddPostButton, DivBottomCardPost, DivCardContainer, DivFormCreatePost, DivLikeContainer, DivTitleName, StyledInput, TextBodyContainer } from './Styled'
import { useHistory } from 'react-router-dom/'
import { goToPost } from '../../routers/Coordinator'
import useForm from '../../hooks/useForm'
import { StyledButton } from '../LoginPage/Styled'
import { useParams } from 'react-router-dom/'

import upBlack from '../../components/img/upBlack.png'
import upWhite from '../../components/img/upWhite.png'
import downBlack from '../../components/img/downBlack.png'
import downWhite from '../../components/img/downWhite.png'
import FeedForm from './FeedForm'



const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const createVote = (id, userVote, vote) =>{
        const headers = {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }

        let body = {}

        if (vote === true){
            body = {
                direction: 1
            }
        } else {
            body = {
                direction: -1
            }
        }

        if (userVote === null){
            axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((res) => {
                getPost()
                console.log('bb', res)
            })
            .catch((err) =>{
                history.push('/error')
                console.log('nn', err.response)
            })
        } else if (userVote === -body.direction){
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then((res) => {
                getPost()
            })
            .catch((err) =>{
                history.push('/error')
            })
        }
    }

    const deletePostVote = (id) => {
        const headers = {
            headers:{
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

    const posts = feed && feed.map((post) => {
        return (
            <DivCardContainer key={post.id} >
                <DivTitleName onClick={() => onClickPost(post.id)}>
                    <p>Posted by {post.username}</p>
                    <h3>{post.title}</h3>
                </DivTitleName>
                <TextBodyContainer>
                    <div>
                        {post.userVote === 1 ? <img src={upBlack} onClick={() => deletePostVote( post.id )}/> : <img src={upWhite} onClick={() => createVote( post.id, post.userVote, true)}/>}
                        <p>{!post.voteSum ? 0 : post.voteSum}</p>
                        {post.userVote === -1 ? <img src={downBlack} onClick={() => deletePostVote( post.id )}/> : <img src={downWhite} onClick={() => createVote( post.id, post.userVote, false )}/>}
                    </div>
                    {post.body}
                </TextBodyContainer>
                <DivBottomCardPost>
                    <DivLikeContainer>
                    </DivLikeContainer>
                    <p>{!post.commentCount ? 0 : post.commentCount} comentários</p>
                </DivBottomCardPost>
            </DivCardContainer>
        )
    })
    
    return (
        <div>
            <FeedForm getPost={getPost}/>
            {posts}
        </div>
    )
}

export default FeedPage