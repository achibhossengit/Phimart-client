import axios from "axios";

const authApiClient = axios.create(
  // {baseURL: "http://127.0.0.1:8000/api/v1"}
  { baseURL: "https://phimart-five.vercel.app/api/v1" }
);

export default authApiClient;

authApiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authTokens')
    if (token){
        config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
