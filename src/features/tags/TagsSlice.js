import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./TagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadTags = createAsyncThunk("tags/loadTags", async () => {
  const tags = await getTags();
  return tags;
});

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadTags.pending, (state) => {
        (state.tags = []),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(loadTags.fulfilled, (state, action) => {
        (state.tags = action.payload),
          (state.isLoading = false),
          (state.isError = false),
          (state.error = "");
      })
      .addCase(loadTags.rejected, (state, action) => {
        (state.tags = []),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error?.message);
      });
  },
});

export default TagsSlice.reducer;
