import api from "./api-config";

export const getAllRatings = async () => {
  const res = await api.get("/star_ratings");
  return res.data;
};

export const getRating = async (id) => {
  const res = await api.get(`/star_ratings/${id}`);
  return res.data;
}

export const postRating = async (id, ratingData) => {
  const res = await api.post(`/products/${id}/star_ratings`, { star_rating: ratingData});
  return res.data;
}

export const putRating = async (id, ratingData) => {
  const res = await api.put(`/star_ratings/${id}`, { star_rating: ratingData});
  return res.data;
}

export const deleteRating = async (id) => {
  const res = await api.delete(`/star_ratings/${id}`);
  return res;
}
