import api from './api-config'

export const getAllCategories = async () => {
  const res = await api.get('/categories');
  return res.data;
}

export const getOneCategory = async (id) => {
  const res = await api.get(`/categories/${id}`);
  return res.data;
}
