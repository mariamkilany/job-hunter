import axios from "axios";

const instance = axios.create({
  baseURL: "https://job-hunter-server-1.onrender.com/api",
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    // if (token) axios.defaults.headers.common["auth-token"] = token;
    if (token) config.headers["auth-token"] = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
