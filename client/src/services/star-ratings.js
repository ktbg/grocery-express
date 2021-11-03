import api from "./api-config";

export const getAllRatings = async () => {
  const res = await api.get("/star_ratings");
  return res.data;
};
