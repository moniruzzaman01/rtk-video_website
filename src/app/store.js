import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "../features/videos/VideosSlice";
import TagsReducer from "../features/tags/TagsSlice";
import VideoReducer from "../features/video/VideoSlice";

const store = configureStore({
  reducer: {
    videos: VideosReducer,
    tags: TagsReducer,
    video: VideoReducer,
  },
});

export default store;
