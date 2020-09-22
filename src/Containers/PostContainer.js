import React, { useState } from 'react';
import PostComponent from '../Components/PostComponent';

function PostContainer(props) {

  const [ posts, setPosts ] = useState([
    {
      title: 'looking for a friend',
      description: 'his name is joe'
    },
    {
      title: 'met this guy at the mall',
      description: 'in 1984'
    },
    {
      title: 'miss my buddy',
      description: 'went to elementary school together'
    },
  ])

  return (
    <div>
      <PostComponent />
    </div>
  )
}

export default PostContainer;