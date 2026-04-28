import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config)=> {
    const auth = JSON.parse(localStorage.getItem('authentication') ?? 'null');

    if (auth?.token?.id_token) {
        config.headers.Authorization = `Bearer ${auth.token.id_token}`;
    }

    return config;
});

export default api;