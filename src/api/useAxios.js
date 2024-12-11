import axios from "axios";

const getAxiosInstance = () => {
  const getAxios = axios.create({
    baseURL: "https://lpapi.morniinc.in/",
  
  });
  getAxios.interceptors.request.use(
    (config) => {
      // Example: Add token if needed
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Response interceptor (optional)
  getAxios.interceptors?.response?.use(
    (response) => response,
    (error) => {
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  );
  return getAxios;
};
const useAxios = () => {
  const useAxiosData = getAxiosInstance();
  return useAxiosData;
};



export default useAxios;
