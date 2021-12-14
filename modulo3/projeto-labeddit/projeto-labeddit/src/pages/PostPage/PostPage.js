import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const PostPage = () => {
    useProtectedPage()

    return(
       <div>
           <h1>POST</h1>
       </div>
    )
}

export default PostPage