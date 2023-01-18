import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

function Update() {

  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

    const {postId} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:4000/posts/${postId}`)
        .then((r)=>r.json())
        .then((post)=>{
            setTitle(post.title)
            setAuthor(post.author)
            setDescription(post.description)
        })

    },[])

    function handleSubmit(e)
    {
     e.preventDefault()

     fetch(`http://localhost:4000/posts/${postId}`,{
        method:"PATCH",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify({title: title, author:author, description: description})
     })
        .then((r)=>r.json())
        .then((post)=>{
        // Successfully updated
        Swal.fire({
            title: 'Updated',
            text: 'Updated successfully',
            icon: 'success',
            confirmButtonText: 'Exit',
            confirmButtonColor:"green"
          })
        }
    )

    }


  return (
    <div className='container my-5'>
      <h3>Update {postId}</h3>
    
      {/*  */}
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" value={title} onChange={function(e){setTitle(e.target.value)}} placeholder="Title" />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control"  rows="3" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Input your description'></textarea>
         </div>
         <div className="mb-3">
            <label className="form-label">Author</label>
            <input type="text" className="form-control" value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder="Author" />
          </div>
          <button type="submit" className="btn btn-outline-primary">Update</button>

       </form>
    </div>
  )
}

export default Update