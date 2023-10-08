//store

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './productsSlice';
import postReducer from './PostsSlice'

const store = configureStore({
  reducer: {
    products: cartReducer,
    posts: postReducer
  },
});

export default store;
