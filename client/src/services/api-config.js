import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://grocery-express-backend-v5fu.onrender.com"
    : "http://localhost:3000/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
