import axios from "axios";

const apiURL = "https://api.42seoul.link";

const instance = axios.create({
  baseURL: apiURL,
  // withCredentials: true,
});

export default instance;
