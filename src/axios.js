
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://13.49.223.232:8000/api/",
  withCredentials: true,
});
