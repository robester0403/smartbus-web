import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const authRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    //'Authorization': "TOKEN"
  },
});
