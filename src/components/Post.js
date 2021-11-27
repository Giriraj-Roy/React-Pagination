import React from 'react'

const Post= ({posts, loading}) => {

    if(loading){
        return <h1>Loading . . . </h1>;
    }

    return <ul className="postss">
        {
            posts.map(post =>(
                <li key={post.id} className="list">
                    {post.title}
                </li>
            ))
        }
    </ul>
}

export default Post
