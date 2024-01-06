import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "../features/videos/VideosSlice";
import TagsReducer from "../features/tags/TagsSlice";
import VideoReducer from "../features/video/VideoSlice";
import RelatedVideosReducer from "../features/relatedVideos/RelatedVideosSlice";

const store = configureStore({
  reducer: {
    videos: VideosReducer,
    tags: TagsReducer,
    video: VideoReducer,
    relatedVideos: RelatedVideosReducer,
  },
});

export default store;
