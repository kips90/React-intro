import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";

function HomePage({user, students})
{
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/posts")
        .then((r)=>r.json())
        .then((posts)=>{
             setPosts(posts)
        })

    },[])

    function handleNewPost(newPost)
    {
      console.log("newpost Homepahge ",  newPost)
      const updatedPost = [...posts, newPost]
      setPosts(updatedPost)
    }

  console.log("DATA AFTER UPDATE", posts)
    return (
        <div className="container">
             <div className="row">
                <div className="col-md-8 ">
                    Fetching Data
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Author</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                             posts.map((singlePost)=>
                                <Post key={singlePost.id}  post={singlePost}/>
                             )
                          
                            }
                        </tbody>
                        </table>

                </div>

                <div className="col-md-4 bg-light">
                  <AddPost handleNewPost={handleNewPost} />

                </div>
                
             </div>
        </div>
    )
}

export default HomePage;

