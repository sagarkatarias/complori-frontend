import axios from "axios";

// Create an axios instance to fetch from localhost
const apiInstance = axios.create({
  baseURL: `http://localhost:5001/api`,
  timeout: 1000,
});

// Handle errors
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default apiInstance;
