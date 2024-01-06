import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTags } from "../features/tags/TagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const dispatch = useDispatch();
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

  let content;
  if (isLoading) {
    content = <div className="col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (tags?.length > 0) {
    content = tags.map((tag, key) => <Tag key={key} title={tag.title} />);
  }
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}
