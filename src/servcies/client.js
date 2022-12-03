import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
};
const client = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: HEADERS,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export { client };
