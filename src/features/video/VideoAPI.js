import AXIOS from "../../utils/axios";

export const getVideo = async (id) => {
  const response = await AXIOS.get(`/videos/${id}`);
  return response.data;
};
