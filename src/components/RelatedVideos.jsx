import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRelatedVideos } from "../features/relatedVideos/RelatedVideosSlice";

export default function RelatedVideos({ id, tags }) {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(loadRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideos.map(
        (
          { id: videoId, thumbnail, duration, title, author, views, date },
          key
        ) => (
          <div key={key} className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
              <a href={`/video/${videoId}`}>
                <img
                  src={thumbnail}
                  className="object-cover"
                  alt="Some video title"
                />
              </a>
              <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                {duration}
              </p>
            </div>

            <div className="flex flex-col w-full">
              <a href="#">
                <p className="text-slate-900 text-sm font-semibold">{title}</p>
              </a>
              <a
                className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                href="#"
              >
                {author}
              </a>
              <p className="text-gray-400 text-xs mt-1">
                {views} views . {date}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

RelatedVideos.propTypes = {
  id: PropTypes.number,
  tags: PropTypes.array,
};
