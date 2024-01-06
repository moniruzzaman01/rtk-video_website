import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { tagRemove, tagSelect } from "../features/filters/FilterSlice";

export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.filter);
  const isSelected = selectedTags.includes(title);
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleDispatch = () => {
    if (isSelected) {
      dispatch(tagRemove(title));
    } else {
      dispatch(tagSelect(title));
    }
  };

  return (
    <div onClick={handleDispatch} className={style}>
      {title}
    </div>
  );
}

Tag.propTypes = {
  title: PropTypes.string,
};
