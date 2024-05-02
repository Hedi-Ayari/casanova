import axios from "axios";

const { REACT_APP_API_BACK } = process.env.REACT_APP_API_BACK

const customAxios = axios.create({
  baseURL: "https://www.casanova-event.com/api/v1",
});


customAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default customAxios;