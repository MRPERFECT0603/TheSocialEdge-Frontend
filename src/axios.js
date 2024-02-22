
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://13.48.192.106:8000/api/",
  withCredentials: true,
});
