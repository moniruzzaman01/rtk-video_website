import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTags } from "../features/tags/TagsSlice";

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
    content = tags.map((tag, key) => (
      <div
        key={key}
        className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
      >
        {tag.title}
      </div>
    ));
  }
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
        {/* <!-- selected --> */}
        {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
          redux
        </div> */}
      </div>
    </section>
  );
}
