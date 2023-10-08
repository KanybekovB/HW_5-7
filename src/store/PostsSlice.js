
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data
});

export const CreatePost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    const response = await axios.post(
      "https://dummyjson.com/posts/add",
      newPost
    );
    return response.data;
  }
);

export const DeletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    await axios.delete(`https://dummyjson.com/posts/${postId}`);
    return postId;
  }
);

const createPostSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(CreatePost.fulfilled, (state, action) => {
        state.posts = state.posts.push(action.payload);
      })
      .addCase(DeletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      
  },
});

export default createPostSlice.reducer;
