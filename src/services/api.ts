import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3333",
  baseURL: "listaempregosapi.vercel.app",
});

export default api;