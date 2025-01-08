import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state for the posts slice
const initialState = {
  data: [], // Holds the list of fetched posts
  loading: "idle", // Tracks loading status: 'idle', 'pending', 'completed', or 'rejected'
  error: null, // Holds error messages, if any
};

// Create an async thunk to fetch posts data
export const getPost = createAsyncThunk("getPost", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // API request
  const data = await res.json(); // Parse JSON response
  if (data) {
    return data; // Return the data if the request succeeds
  } else {
    return { err: "Some error occurred" }; // Return error object on failure
  }
});

// Create a slice for posts
const postSlice = createSlice({
  name: "post-slice", // Unique name for the slice
  initialState, // Define the initial state
  reducers: {}, // Define regular reducers (not used here)
  extraReducers: (builder) => {
    // Handle the different states of the async thunk
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = "completed"; // Update loading status to 'completed'
        state.data = action.payload; // Store the fetched posts data
      })
      .addCase(getPost.rejected, (state) => {
        state.loading = "rejected"; // Update loading status to 'rejected'
        state.error = "Failed to fetch posts."; // Optional error handling
      })
      .addCase(getPost.pending, (state) => {
        state.loading = "pending"; // Update loading status to 'pending'
      });
  },
});

// Selector to retrieve the entire post slice state
export const selectAllPosts = (store) => store.post;

// Export the reducer for integration into the store
export default postSlice.reducer;
