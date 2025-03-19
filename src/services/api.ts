import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "https://listaempregosapi.vercel.app"
  // baseURL: process.env.REACT_APP_URL_API,
});

export default api;