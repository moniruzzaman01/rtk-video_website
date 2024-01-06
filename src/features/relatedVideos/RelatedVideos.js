import AXIOS from "../../utils/axios";

function queryGenerator(id, tags) {
  let url = "?";
  tags.forEach((element, i) => {
    if (i == tags.length - 1) {
      url = url + "tags_like=" + element + "&id_ne=" + id + "&_limit=5";
    } else {
      url = url + "tags_like=" + element + "&";
    }
  });
  return url;
}

export const getRelatedVideos = async ({ id, tags }) => {
  const query = queryGenerator(id, tags);
  const response = await AXIOS.get(`/videos${query}`);
  return response.data;
};
