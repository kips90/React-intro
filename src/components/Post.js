import { Link } from "react-router-dom";


function Post({post}) 
{
  
  function deletePost()
  {
    // hOMEWORK
     fetch(`http://localhost:4000/posts/${post.id}`, {
      method: "DELETE"
     })
  }
  return (
        <tr>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>{post.author}</td>
            
            <td><button className="btn btn-secondary">
                <Link className="text-white" to={`/post/${post.id}`}> ViewPost</Link>
              </button>
            </td>
            <td><Link to={`/updatepost/${post.id}`} className="btn btn-success">
                 Update
              </Link></td>
            <td><button onClick={deletePost} className="btn btn-danger">Delete</button></td>
        </tr>
  )
}

export default Post