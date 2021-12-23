import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'


const Router = ({ setRightButtonText }) => {
    return (
        <Switch>
            <Route exact path='/login'>
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path='/cadastro'>
                <SignUpPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path='/'>
                <FeedPage />
            </Route>
            <Route exact path='/post/:id'>
                <PostPage />
            </Route>
            <Route>
                <ErrorPage path='/error' />
            </Route>
        </Switch>
    )
}

export default Router