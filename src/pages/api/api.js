import axios from "axios";

const apiURL = "https://api.42seoul.link";

const instance = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    } else if (
      error.response.status === 403 &&
      error.response.data.code === "AU001"
    ) {
      return refreshToken(error);
    } else if (error.response.status === 404) {
      alert("로그인이 필요합니다.");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;
