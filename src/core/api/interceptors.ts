import { type AxiosInstance, type AxiosResponse, AxiosError } from 'axios';
import { STORAGE_KEYS } from '../storage/storageKeys';
import { type ApiError } from './types';

export const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {

    // Interceptor para injetar o Token JWT automaticamente do localStorage
    axiosInstance.interceptors.request.use((config) => {
        // Recupera o token do SecureStore
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

        // Se existir token, adiciona no cabeçalho
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => Promise.reject(error));

    // TRATA O RETORNO DA REQUISIÇÃO
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error: AxiosError<ApiError>) => {
            // Se o token expirar ou for inválido limpa o armazenamento local
            if (error.response?.status === 401) {
                try {
                    localStorage.removeItem(STORAGE_KEYS.TOKEN);
                    localStorage.removeItem(STORAGE_KEYS.USER);
                    // Redireciona para o login
                    window.location.href = '/login';
                } catch (deleteError) {
                    console.warn('Erro ao remover dados do storage:', deleteError);
                }
            }

            // Se a API retornou um erro estruturado
            if (error.response?.data) {
                return Promise.reject(error.response.data);
            }

            // Erros de rede ou timeout
            let errorMessage = 'Ocorreu um erro desconhecido ao comunicar com o servidor.';
            let statusCode = error.response?.status || 500;

            if (error.code === 'ECONNABORTED') {
                errorMessage = 'A requisição demorou muito e foi cancelada (Timeout).';
                statusCode = 408;
            } else if (!error.response) {
                errorMessage = 'Não foi possível conectar ao servidor. Verifique se a API está ligada.';
                statusCode = 0;
            }

            const formattedError: ApiError = {
                error: true,
                message: errorMessage,
                statusCode: statusCode
            };

            return Promise.reject(formattedError);
        }
    );

    return axiosInstance;
};