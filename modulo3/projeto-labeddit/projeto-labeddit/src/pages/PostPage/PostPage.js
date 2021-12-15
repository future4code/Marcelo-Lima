import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { BASE_URL } from '../../constants/urls'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

const PostPage = () => {
    useProtectedPage()

    const params = useParams()

    const postDetails = useRequestData([], `${BASE_URL}/posts`)



    // console.log(postDetails)

   
    return(
       <div>
           <h1>POST</h1>
       </div>
    )
}

export default PostPage