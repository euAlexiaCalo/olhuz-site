import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../../core/contexts/AuthContext";
import { userServices } from "../services/userServices";
import { isApiError } from "../../../core/api/types";
import type { UserResponse } from "../types/userResponses";

export const useProfileViewModel = () => {
    const { user: authUser, signOut } = useAuth();

    const [profile, setProfile] = useState<UserResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const [isDeactivateModalVisible, setDeactivateModalVisible] = useState(false);
    const [isSignOutModalVisible, setSignOutModalVisible] = useState(false);

    // Função de carregamento do perfil
    const loadProfile = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await userServices.getProfile();
            if (response.data) {
                setProfile(response.data);
            }
        } catch (error: unknown) {
            if (isApiError(error)) {
                alert(`Erro ao carregar perfil: ${error.message}`);
            } else {
                alert("Erro ao carregar os dados do perfil.");
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Efeito para carregar o perfil
    useEffect(() => {
        let isMounted = true;

        const fetchProfileData = async () => {
            try {
                const response = await userServices.getProfile();
                if (isMounted && response.data) {
                    setProfile(response.data);
                }
            } catch (error: unknown) {
                if (isMounted) {
                    if (isApiError(error)) {
                        alert(`Erro ao carregar perfil: ${error.message}`);
                    } else {
                        alert("Erro ao carregar os dados do perfil.");
                    }
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchProfileData();

        return () => {
            isMounted = false;
        };
    }, []);

    // Ação para desativar conta
    const handleDeactivateAccount = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await userServices.deactivateAccount();

            if (!response.error) {
                setDeactivateModalVisible(false);
                alert("Sua conta foi desativada com sucesso.");
                await signOut();
            }
        } catch (error: unknown) {
            setDeactivateModalVisible(false);

            if (isApiError(error)) {
                alert(error.message);
            } else {
                alert("Ocorreu um erro ao tentar desativar a conta.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOutConfirm = async () => {
        setSignOutModalVisible(false);
        await signOut();
    };

    const handleEditData = () => {
        alert("Navegar/Abrir formulário de edição de dados");
    };

    const handleChangePassword = () => {
        alert("Navegar/Abrir modal de alteração de senha");
    };

    return {
        profile: profile || (authUser as unknown as UserResponse),
        isLoading,
        isDeactivateModalVisible,
        setDeactivateModalVisible,
        handleDeactivateAccount,
        isSignOutModalVisible,
        setSignOutModalVisible,
        handleSignOutConfirm,
        handleEditData,
        handleChangePassword,
        loadProfile,
    };
};