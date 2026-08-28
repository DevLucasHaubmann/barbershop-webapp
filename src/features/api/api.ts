import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_ENDPOINT;

const api = axios.create({
    baseURL: apiUrl,
    withCredentials: true 
});

let isRefreshing = false;
let failedQueue: { resolve: (value?: unknown) => void, reject: (reason?: unknown) => void }[] = [];

const processQueue = (error: Error | null, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            
            if (isRefreshing) {
                return new Promise(function(resolve, reject) {
                    failedQueue.push({ resolve, reject });
                }).then(() => api(originalRequest))
                  .catch(err => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                await axios.post(`${apiUrl}/auth/refresh`, {}, { 
                    withCredentials: true 
                });

                processQueue(null);
                
                return api(originalRequest);
                
            } catch (refreshError) {
                processQueue(refreshError as Error, null);
                
                window.location.href = '/auth/login';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;