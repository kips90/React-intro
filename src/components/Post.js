

function Post({post}) 
{
  return (
        <tr>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>{post.author}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>
  )
}

export default Post