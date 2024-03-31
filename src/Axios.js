import axios from "axios";

let url = process.env.REACT_APP_BACKEND_URL;

const client = axios.create({
  baseURL: url,
  withCredentials: true,
});

export default client;
