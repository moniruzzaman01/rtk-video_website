import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./RelatedVideos";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadRelatedVideos = createAsyncThunk(
  "relatedVideos/loadVideos",
  async (query) => {
    const videos = await getRelatedVideos(query);
    return videos;
  }
);

const RelatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadRelatedVideos.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.relatedVideos = []),
          (state.error = "");
      })
      .addCase(loadRelatedVideos.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.relatedVideos = action.payload),
          (state.error = "");
      })
      .addCase(loadRelatedVideos.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.relatedVideos = []),
          (state.error = action.error?.message);
      });
  },
});

export default RelatedVideosSlice.reducer;
