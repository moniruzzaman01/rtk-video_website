import AXIOS from "../../utils/axios";

const getTags = async () => {
  const response = await AXIOS("/tags");
  return response.data;
};
export default getTags;
