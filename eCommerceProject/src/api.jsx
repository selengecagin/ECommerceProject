import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default api;
// xios instance -> set base URL - all HTTP requests made will be prefixed with this URL
