import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Transform error for better handling
    const transformedError = {
      message:
        error.response?.data?.message || error.message || "An error occurred",
      status: error.response?.status,
      data: error.response?.data,
    };

    return Promise.reject(transformedError);
  }
);
