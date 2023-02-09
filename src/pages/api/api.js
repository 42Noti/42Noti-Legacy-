import axios from "axios";

const apiURL = "";

const instance = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

export default instance;
