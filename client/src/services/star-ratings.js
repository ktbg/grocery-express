import api from "./api-config";

export const getAllRatings = async () => {
  const res = await api.get("/star_ratings");
  return res.data;
};

export const getRating = async (id) => {
  const res = await api.get(`/star_ratings/${id}`);
  return res.data;
}

export const postRating = async (ratingData) => {
  const res = await api.post(`/star_ratings`, { rating: ratingData});
  return res.data;
}

export const putRating = async (id, ratingData) => {
  const res = await api.put(`/star_rating/${id}`, { food: ratingData});
  return res.data;
}

export const deleteRating = async (id) => {
  const res = await api.delete(`/star_rating/${id}`);
  return res;
}
