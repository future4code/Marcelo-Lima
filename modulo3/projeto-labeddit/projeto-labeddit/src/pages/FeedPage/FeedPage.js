import { Fab } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { AddPostButton, DivCardContainer, DivLikeContainer } from './Styled'
import { useHistory } from 'react-router-dom/'
import AddIcon from '@material-ui/icons/Add';
import { goToPost } from '../../routers/Coordinator'


const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()

    const feed = useRequestData([], `${BASE_URL}/posts`)

    console.log(feed)



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
                <h4 >{post.username}</h4>
                <p >{post.body}</p>
                <div>
                    <DivLikeContainer>
                        <button onClick={clickButton}>+</button>
                        <p>{!post.voteSum ? 0 : post.voteSum}</p>
                        <button>-</button>
                    </DivLikeContainer>
                    <p>{!post.commentCount ? 0 : post.commentCount} comentários</p>
                </div>
            </DivCardContainer>
        )
    })
    return (
        <div>
            {posts}
            <AddPostButton color="primary" aria-label="add">
                <AddIcon />
            </AddPostButton>
        </div>
    )
}

export default FeedPage