
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://13.48.5.48:8000/api/",
  withCredentials: true,
});
