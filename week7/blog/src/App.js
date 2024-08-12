import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {

  const [postId, setPostId] = useState(4);
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'This is a random message.',
    },
    {
      postNumber: 1,
      text: 'This is another random message.',
    },
    {
      postNumber: 2,
      text: 'This is a friendly random message.',
    },
    {
      postNumber: 3,
      text: 'This is an angry random message.',
    },
  ]);

  const handleDeletePost = (id) => {

    let updatedPostList = postList.filter(post => post.postNumber !== id);
    setPostList(updatedPostList);
  };

  const handleAddPost = (newText) => {

    let newPost = {
      postNumber: postId,
      text: newText
    };

    setPostList(postList => [...postList, newPost]);
    setPostId(postId+1);
  };

  const posts = postList.map((post) => 
    <Post key= {post.postNumber} 
      text= {post.text} 
      id= {post.postNumber}
      onDelete= {handleDeletePost} 
    />
  );

  return (
    <div>
      {posts}
      <AddPost onAdd={handleAddPost}/>
   </div>
  );
}

export default App;
