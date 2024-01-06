import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "../features/videos/VideosSlice";

const store = configureStore({
  reducer: {
    videos: VideosReducer,
  },
});

export default store;
