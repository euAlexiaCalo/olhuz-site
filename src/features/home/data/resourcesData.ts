// Recursos que o Olhuz oferece
import { Eye, Cpu, ShieldCheck } from "lucide-react";

export interface Resource {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
    }>;
    thickness?: number;
}

export const RESOURCES: Resource[] = [
    {
        id: 1,
        title: "Visão Computacional e Reconhecimento Facial",
        description:
            "Tecnologia baseada em redes neurais capaz de detectar rostos em tempo real e rastrear pontos biométricos específicos, identificando microexpressões e variações geométricas associadas a sentimentos humanos.",
        icon: Eye,
    },
    {
        id: 2,
        title: "Integração com LLM",
        description:
            "Infraestrutura de inteligência artificial multimodal que atua como o cérebro do sistema, processando dados visuais complexos e gerando respostas textuais contextualizadas de forma altamente humanizada.",
        icon: Cpu,
    },
    {
        id: 3,
        title: "Criptografia e Segurança de Dados",
        description:
            "Camada de segurança robusta baseada em protocolos HTTPS e criptografia de ponta a ponta que protege o tráfego de imagens, o histórico de leituras e os dados confidenciais do usuário.",
        icon: ShieldCheck,
        thickness: 1.4,
    },
];