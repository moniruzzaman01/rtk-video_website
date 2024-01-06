import { configureStore } from "@reduxjs/toolkit";
import VideosReducer from "../features/videos/VideosSlice";
import TagsReducer from "../features/tags/TagsSlice";
import VideoReducer from "../features/video/VideoSlice";
import RelatedVideosReducer from "../features/relatedVideos/RelatedVideosSlice";
import FilterReducer from "../features/filters/FilterSlice";

const store = configureStore({
  reducer: {
    videos: VideosReducer,
    tags: TagsReducer,
    video: VideoReducer,
    relatedVideos: RelatedVideosReducer,
    filter: FilterReducer,
  },
});

export default store;
