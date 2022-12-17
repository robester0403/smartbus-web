import axios from "axios";
const BASE_URL = "https://localhost:5000";

export const authRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    //'Authorization': "TOKEN"
  },
});
