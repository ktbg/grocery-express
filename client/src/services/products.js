import api from "./api-config";

export const getAllProducts = async () => {
  const res = await api.get(`/products`);
  return res.data;
};

export const getProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data
}
