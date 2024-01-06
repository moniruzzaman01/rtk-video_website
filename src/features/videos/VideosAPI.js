import AXIOS from "../../utils/axios";

export const getVideos = async () => {
  const response = await AXIOS.get("/videos");
  return response.data;
};
