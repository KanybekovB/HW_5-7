import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, DeletePost } from "../store/PostsSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId) => {
    dispatch(DeletePost(postId));
  };

  return (
    <>
      <ul>
        <ul>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </ul>
      </ul>
    </>
  );
};
