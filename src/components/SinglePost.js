import React from 'react'
import { useParams } from 'react-router-dom'

function SinglePost() {

    const {postId} = useParams()


  return (
    <div>
        <h1>SinglePost {postId}</h1>
    </div>
  )
}

export default SinglePost