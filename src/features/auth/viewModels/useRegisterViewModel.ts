import { useState } from "react";
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authServices } from "../services/authServices";
import type { RegisterDto } from "../types/authModels";
import { isApiError } from "../../../core/api/types";
import { formatCPF, formatPhone, unformat } from "../../../shared/utils/formatters";

export const useRegisterViewModel = () => {
    const navigate = useNavigate();

    // Estados de Controle da Tela
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [acceptTerms, setAcceptTerms] = useState(false);

    // Dados do Formulário
    const [formData, setFormData] = useState<RegisterDto>({
        fullName: "",
        cpf: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Atualização dos campos
    const handleInputChange = (
        field: keyof RegisterDto,
        value: string
    ) => {
        // Limpa erros ao digitar
        if (errorMessage) setErrorMessage(null);

        let formattedValue = value;

        // Aplica as formatações
        if (field === "cpf") {
            formattedValue = formatCPF(value);
        } else if (field === "phoneNumber") {
            formattedValue = formatPhone(value);
        }

        setFormData((prev) => ({ ...prev, [field]: formattedValue }));
    };

    // Validação
    const validateRegisterForm = (): boolean => {
        if (
            !formData.fullName.trim() ||
            !formData.phoneNumber ||
            !formData.cpf ||
            !formData.birthDate ||
            !formData.email.trim() ||
            !formData.password
        ) {
            setErrorMessage("Preencha todos os campos obrigatórios.");
            return false;
        }

        if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
            setErrorMessage("As senhas não coincidem.");
            return false;
        }

        if (!acceptTerms) {
            setErrorMessage("Você precisa aceitar os Termos de Uso e a Política de Privacidade.");
            return false;
        }

        return true;
    };

    // Envio do Formulário
    const handleRegister = async (e?: SubmitEvent) => {
        if (e) e.preventDefault();
        if (isLoading) return;

        if (!validateRegisterForm()) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            const payload: RegisterDto = {
                fullName: formData.fullName.trim(),
                cpf: unformat(formData.cpf),
                birthDate: formData.birthDate,
                phoneNumber: unformat(formData.phoneNumber),
                email: formData.email.trim(),
                password: formData.password,
                confirmPassword: formData.confirmPassword
            };

            const response = await authServices.register(payload);

            if (response.data) {
                alert("Conta criada com sucesso!");
                navigate("/login");
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Ocorreu um erro ao realizar o cadastro. Tente novamente.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        errorMessage,
        acceptTerms,
        setAcceptTerms,
        handleInputChange,
        handleRegister
    };
};