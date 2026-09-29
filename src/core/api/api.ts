import axios from 'axios';
import { setupInterceptors } from './interceptors';

const api = axios.create({
    baseURL: 'https://olhuz-api.onrender.com/api',
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
    },
});

setupInterceptors(api);

export default api;