import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../store/PostsSlice'

export const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreatePost({
      title: title,
      body: body,
      userId: null,
      tags: [],
      reactions: null,  
    }));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}