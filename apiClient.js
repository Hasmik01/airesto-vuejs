// src/api/apiClient.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attach auth token (e.g., from localStorage)
// apiClient.interceptors.request.use(config => {
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

// Handle global errors (optional)
apiClient.interceptors.response.use(
    response => response,
    error => {
        // Example: auto-logout on 401
        // if (error.response && error.response.status === 401) {
        //     localStorage.removeItem('auth_token');
        //     window.location.href = '/login';
        // }
        return Promise.reject(error);
    }
);

export default apiClient;
