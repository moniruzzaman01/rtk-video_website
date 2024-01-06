import PropTypes from "prop-types";

export default function SingleVideo({ video }) {
  const { id, author, avatar, date, duration, thumbnail, title, views } =
    video || {};
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <a href={`/video/${id}`}>
            <img
              src={thumbnail}
              className="w-full h-auto"
              alt="Some video title"
            />
          </a>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <a href="#" className="shrink-0">
            <img
              src={avatar}
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </a>

          <div className="flex flex-col">
            <a href="video.html">
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </a>
            <a
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
              {author}
            </a>
            <p className="text-gray-400 text-xs mt-1">
              {views} views. {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleVideo.propTypes = {
  video: PropTypes.object,
};
