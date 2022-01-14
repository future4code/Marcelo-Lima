import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom/'
import { goToPost } from '../../routers/Coordinator'
import loading from '../../components/img/loading.gif'
import FeedForm from './FeedForm'
import {
    DivBottomCardPost,
    DivCardContainer,
    DivLikeContainer,
    DivTitleName,
    TextBodyContainer,
    StyledButtonLikeUpBlack,
    StyledButtonLikeUpWhite,
    StyledButtonLikeDownBlack,
    StyledButtonLikeDownWhite,
    StyledLoading
} from './Styled'


const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`)

    const onClickPost = (id) => {
        goToPost(history, id)
    }

    const createVote = (id, userVote, vote) => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const body = {
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

    const posts = feed && feed.map((post) => {
        return (
            <DivCardContainer key={post.id} >
                <DivTitleName onClick={() => onClickPost(post.id)}>
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
                    <DivLikeContainer>
                    </DivLikeContainer>
                    <p>{!post.commentCount ? 0 : post.commentCount} comentários</p>
                </DivBottomCardPost>
            </DivCardContainer>
        )
    })

    return (
        <div>
            {feed.length ?
                <div>
                    <FeedForm getPost={getPost} />
                    {posts}
                </div> : <StyledLoading><img src={loading} /></StyledLoading>}
        </div>
    )
}

export default FeedPage