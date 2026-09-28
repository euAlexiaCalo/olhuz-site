// Dados fictícios para os depoimentos
export interface Feedback {
    id: string;
    message: string;
    name: string;
    photo: string;
    alt: string;
}

export const FEEDBACKS_MOCK: Feedback[] = [
    {
        id: "1",
        message:
            "O Olhuz mudou completamente a minha forma de interagir com documentos e imagens no dia a dia. A precisão da IA é impressionante!",
        name: "Mariana Souza",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
        alt: "Foto de perfil de Mariana Souza",
    },
    {
        id: "2",
        message:
            "Uma ferramenta indispensável para autonomia e inclusão digital. Recomendo a todos que buscam acessibilidade real.",
        name: "Carlos Eduardo",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        alt: "Foto de perfil de Carlos Eduardo",
    },
    {
        id: "3",
        message:
            "Interface limpa, intuitiva e descrições extremamente ricas em detalhes espaciais e textuais. Parabéns à equipe do Olhuz!",
        name: "Beatriz Lima",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
        alt: "Foto de perfil de Beatriz Lima",
    },
];