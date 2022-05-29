import axios from "axios";
import config from "../config";

const { node_api_base_url } = config;

const httpConfig = axios.create({
  timeout: 10000,
  withCredentials: true,
});

httpConfig.interceptors.request.use((req) => {
  req.baseURL = node_api_base_url;

  req.headers = {
    ...req.headers,
    Authorization: `Bearer ${""}`,
  };
  return req;
});

httpConfig.interceptors.response.use(
  (successRes) => {
    return successRes;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log("forbidden");
    }
    return Promise.reject(error);
  }
);

export default httpConfig;
