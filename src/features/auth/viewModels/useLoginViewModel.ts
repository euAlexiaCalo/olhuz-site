import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../core/contexts/AuthContext';
import { authServices } from "../services/authServices";
import { isApiError } from "../../../core/api/types";
import type { LoginDto } from "../types/authModels";

export const useLoginViewModel = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState<LoginDto>({
        email: '',
        password: ''
    });

    // Atualiza os campos do formulário
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement> | keyof LoginDto,
        value?: string
    ) => {
        // Limpa erros ao digitar
        if (errorMessage) setErrorMessage(null);

        if (typeof e === 'string' && value !== undefined) {
            setFormData((prev) => ({ ...prev, [e]: value }));
        } else if (typeof e === 'object' && e.target) {
            const { name, value: inputValue } = e.target;
            setFormData((prev) => ({ ...prev, [name]: inputValue }));
        }
    };

    // Função para processar o envio do formulário
    const handleLogin = async (e?: SubmitEvent) => {
        if (e) e.preventDefault(); // Evita o reload da página

        if (isLoading) return;

        if (!formData.email || !formData.password) {
            setErrorMessage('Preencha todos os campos.');
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);

        try {
            const response = await authServices.login(formData);

            if (response.error) {
                setErrorMessage(response.message);
                return;
            }

            if (response.data) {
                await signIn(response.data.token, response.data.user);
                navigate('/perfil');
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Erro de conexão com o servidor. Tente novamente mais tarde.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        errorMessage,
        handleInputChange,
        handleLogin
    };
};