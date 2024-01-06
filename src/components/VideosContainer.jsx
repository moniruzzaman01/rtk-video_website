import { useEffect } from "react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../features/videos/VideosSlice";
import SingleVideo from "./SingleVideo";

export default function VideosContainer() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(loadVideos());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <div className="col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (videos?.length == 0) {
    content = <div className="col-span-12">No videos found!!!</div>;
  } else if (videos?.length > 0) {
    content = videos.map((video, key) => (
      <SingleVideo key={key} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
      <Pagination />
    </section>
  );
}
