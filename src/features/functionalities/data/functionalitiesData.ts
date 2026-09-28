import { Eye, Sparkles, ShieldCheck, Cpu, Camera, FileText } from "lucide-react";

export interface Functionalitie {
    id: number;
    title: string;
    description: string;
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
    }>;
    thickness?: number;
}

export const FUNCTIONALITIES: Functionalitie[] = [
  {
    id: 1,
    title: "Detecção de Emoções",
    description: "Capacidade do sistema de analisar o rosto das pessoas ao redor e traduzir suas expressões faciais em áudio ou texto, permitindo que o usuário identifique instantaneamente sentimentos como alegria, surpresa, desânimo ou cansaço durante uma conversa.",
    icon: Eye,
  },
  {
    id: 2,
    title: "Interpretação Visual Inteligente",
    description: "Funcionalidade que permite ao usuário interagir diretamente com as imagens capturadas, fazendo perguntas livres sobre o que está na foto e recebendo explicações aprofundadas sobre cenários, rótulos de produtos ou obras de arte.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Leitura de Documentos e Acessibilidade",
    description: "Conversão automatizada de arquivos complexos, como PDFs pesados, faturas de contas ou cardápios de restaurantes, em descrições de áudio limpas e textos estruturados que facilitam os estudos e garantem autonomia financeira.",
    icon: FileText,
  },
  {
    id: 4,
    title: "Captura Fotográfica Instantânea",
    description: "Ação de registrar fotos de forma simples através do aplicativo ou da plataforma web, disparando um processamento imediato que devolve o conteúdo visual transformado em informações textuais fáceis de compreender.",
    icon: Camera,
  },
  {
    id: 5,
    title: "Descrição e Orientação Espacial",
    description: "Mecanismo que faz uma leitura completa do ambiente físico e descreve de forma narrativa a disposição dos móveis, a organização de objetos sobre uma mesa ou a profundidade e os obstáculos presentes em um corredor de forma detalhada.",
    icon: Cpu,
  },
  {
    id: 6,
    title: "Proteção e Controle de Privacidade",
    description: "Suas imagens e histórico de leituras são processados com total criptografia, garantindo total privacidade e controle da sua conta.",
    icon: ShieldCheck,
  },
];