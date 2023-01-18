import {useState} from 'react'
import Swal from 'sweetalert2'

function AddPost({handleNewPost}) 
{
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")

    //   console.log(title)
    function handleSubmit(e){
      e.preventDefault();

      const data = {
        author:author,
        description:description,
        title: title
      }
      setAuthor("");
      setDescription("");
      setTitle("");

      console.log(data)
      fetch("http://localhost:4000/posts", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(data)
      })
      .then((r)=>r.json())
      .then((newPost)=>{
        // utilize
        handleNewPost(newPost)
       
        Swal.fire({
          title: 'Success',
          text: 'Saved successfully',
          icon: 'success',
          confirmButtonText: 'Exit',
          confirmButtonColor:"green"
        })
      })
    }

  return (
    <div>
       <h3 className='text-center'>AddPost</h3> 

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
          <button type="submit" className="btn btn-outline-primary">Save</button>

       </form>
    </div>
  )
}

export default AddPost