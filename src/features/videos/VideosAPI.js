import AXIOS from "../../utils/axios";

export const getVideos = async ({ tags, searchText }) => {
  let query = "";
  if (tags?.length) {
    query += "?";
    query += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchText != "") {
    if (query != "") {
      query += `&q=${searchText}`;
    } else {
      query += `?q=${searchText}`;
    }
  }
  console.log(`/videos${query}`);
  const response = await AXIOS.get(`/videos${query}`);
  return response.data;
};
