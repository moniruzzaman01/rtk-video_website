import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./VideoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const loadVideo = createAsyncThunk("video/loadVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

const VideoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadVideo.pending, (state) => {
        (state.isLoading = true),
          (state.isError = false),
          (state.video = {}),
          (state.error = "");
      })
      .addCase(loadVideo.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.video = action.payload),
          (state.error = "");
      })
      .addCase(loadVideo.rejected, (state, action) => {
        (state.isLoading = false),
          (state.isError = true),
          (state.video = {}),
          (state.error = action.error?.message);
      });
  },
});

export default VideoSlice.reducer;
