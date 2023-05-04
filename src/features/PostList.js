import React from 'react'
import { useSelector } from 'react-redux'

const PostList = () => {
const posts=useSelector(state=>state.posts)



  return (
    <div className="list-posts">
     <h1>PostList</h1> 
    {posts && posts.map((post)=>(
    <div id='post-details' key={post.id}>
 <p>{post.title}</p>
    <p>{post.content}</p>
    <p>  written by {post.author}</p><hr/>
    </div>
     ))}


    </div>
  )
}

export default PostList