import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { STORAGE_KEYS } from "../storage/storageKeys";

// Usuário que a api retorna
export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  cpf?: string;
  birthDate?: string;
  isActive: boolean;
}

// TIPAGEM DAS FUNÇÕES QUE VAI EXPORTAR PARA O APP
interface AuthContextData {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (token: string, userData: User) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (userData: User) => void;
}

// CRIAÇÃO DO CONTEXTO E PROVIDER

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Assim que o site abre, verifica se já existe um token e usuário salvos no navegador
  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Erro ao carregar dados de autenticação do storage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStorageData();
  }, []);

  // MÉTODOS DE CONTROLE DE SESSÃO
  
  // Função chamada após um login bem-sucedido
  const signIn = async (newToken: string, userData: User) => {
    try {
      localStorage.setItem(STORAGE_KEYS.TOKEN, newToken);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
      setToken(newToken);
      setUser(userData);
    } catch (error) {
      console.error("Erro ao salvar dados no storage:", error);
    }
  };

  // Função de logout (limpa os dados e o estado)
  const signOut = async () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error("Erro ao limpar dados de autenticação:", error);
    }
  };

  // Atualiza os dados do usuário no estado global
  const updateUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto nas views/viewmodels
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};