import axios from "axios";
import {store} from "../store/store.tsx";

axios.interceptors.request.use((config)=> {
    const token = store.getState().auth?.token?.id_token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})