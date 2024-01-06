import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const loadVideos = createAsyncThunk("videos/loadVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const VideosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadVideos.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.videos = []),
          (state.error = "");
      })
      .addCase(loadVideos.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.videos = action.payload),
          (state.error = "");
      })
      .addCase(loadVideos.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.videos = []),
          (state.error = action.error?.message);
      });
  },
});

export default VideosSlice.reducer;
