import PropTypes from "prop-types";

export default function VideoPlayer({ link, title }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
}

VideoPlayer.propTypes = {
  link: PropTypes.link,
  title: PropTypes.string,
};
