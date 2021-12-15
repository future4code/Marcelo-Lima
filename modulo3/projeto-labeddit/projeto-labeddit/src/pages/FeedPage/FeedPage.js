import { Fab } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { AddPostButton, DivCardContainer } from './Styled'
import { useHistory } from 'react-router-dom/'
import AddIcon from '@material-ui/icons/Add';
import { goToPost } from '../../routers/Coordinator'


const FeedPage = () => {
    useProtectedPage()

    const history = useHistory()

    const feed = useRequestData([], `${BASE_URL}/posts`)

    console.log(feed)

    const posts = feed.map((post) => {
        return (
            <DivCardContainer>
                <p>{post.username}</p>
                <p>{post.body}</p>
            </DivCardContainer>
        )
    })
    return (
        <div>
            <h1>FEED</h1>
            {posts}
            <AddPostButton color="primary" aria-label="add">
                <AddIcon />
            </AddPostButton>

        </div>
    )
}

export default FeedPage