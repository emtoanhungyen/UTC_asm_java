import axios from "axios";
import config from "../config";

// Instance with Authorization for authenticated requests
export const instance = axios.create({
    baseURL: config.apiBaseURL,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Instance without Authorization for unauthenticated requests (e.g., registration, login)
export const authInstance = axios.create({
    baseURL: config.apiBaseURL,
});

// No interceptors added to `authInstance`, so it won’t include the Authorization header
