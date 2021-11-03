import axios from "axios";

let apiUrl;

//  DUCHESS might need to add /api after this possibly?
const apiUrls = {
  production: "https://banana-scallops-butter-api.herokuapp.com/",
  development: "http://localhost:3000/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
