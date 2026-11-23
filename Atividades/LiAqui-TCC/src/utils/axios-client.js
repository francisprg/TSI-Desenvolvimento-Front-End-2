import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosClient = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
});

export const csrfClient = axios.create({
    baseURL: new URL(apiUrl).origin,
    withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    return config;
});


axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;