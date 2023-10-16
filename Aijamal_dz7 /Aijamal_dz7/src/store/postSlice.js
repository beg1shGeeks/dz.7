import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk('posts/getPosts', async function () {
  const { data } = await axios.get('https://dummyjson.com/posts?limit=5');
  return data;
});

export const addPostApi = createAsyncThunk(
  'posts/addPostApi',
  async function (formData) {
    const { data } = await axios.post(
      `https://dummyjson.com/posts/add`,
      formData
    );
    return data;
  }
);
export const deletePostApi = createAsyncThunk(
  'posts/deletePostApi',
  async function (id) {
    const { data } = await axios.delete(`https://dummyjson.com/todos/${id}`);
    return data;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loader: false,
  },
  reducers: {
    deletPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    addNewPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
      console.log(state.posts);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loader = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      console.log(action.payload);
    });
    // builder.addCase(deletePostApi.pending, (state) => {
    //   console.log(state);
    // });
    builder.addCase(deletePostApi.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(deletePostApi.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(addPostApi.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(addPostApi.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { deletPost, addNewPost } = postSlice.actions;

export default postSlice.reducer;
