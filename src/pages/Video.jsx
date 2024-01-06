import { useDispatch, useSelector } from "react-redux";
import RelatedVideos from "../components/RelatedVideos";
import VideoDescription from "../components/VideoDescription";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadVideo } from "../features/video/VideoSlice";

export default function Video() {
  const { id: videoId } = useParams();
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const { id, link, title, tags } = video || {};
  useEffect(() => {
    dispatch(loadVideo(videoId));
  }, [dispatch, videoId]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer link={link} title={title} />
            <VideoDescription video={video} />
          </div>
          <RelatedVideos id={id} tags={tags} />
        </div>
      </div>
    </section>
  );
}
