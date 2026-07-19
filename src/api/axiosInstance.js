import axios from "axios";
const baseUrl = "http://localhost:5002/api";
const authBaseUrl = "http://localhost:5001/api";
const roomBaseUrl = "http://localhost:5005/api";
const api = axios.create({
  baseURL: roomBaseUrl,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;