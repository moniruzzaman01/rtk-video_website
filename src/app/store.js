import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "../features/videos/VideosSlice";
import TagsReducer from "../features/tags/TagsSlice";

const store = configureStore({
  reducer: {
    videos: VideosReducer,
    tags: TagsReducer,
  },
});

export default store;
