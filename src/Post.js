import React from 'react';
import "./Post.css"

const Post = ({item}) => {

  return <>
        <div className='Post'>
            <p className='titlePost'>{item.title}</p>
            <p>{item.body}</p>
        </div>
  </>
}

export default Post