export interface Member {
    id: number;
    name: string;
    position: string;
    photo: string;
    alt: string;
    github?: string;
    linkedin: string;
}

export const TEAM: Member[] = [
    {
        id: 1,
        name: "Alexia Caló",
        position: "Desenvolvedora Full-stack",
        photo: "https://github.com/euAlexiaCalo.png",
        alt: "Alexia Caló - Desenvolvedora Full-stack",
        github: "https://github.com/euAlexiaCalo",
        linkedin: "https://www.linkedin.com/in/al%C3%A9xiacal%C3%B3/"
    },
    {
        id: 2,
        name: "Luiz Felipe",
        position: "Designer UX/UI",
        photo: "https://github.com/LuizFelipeMatheus.png",
        alt: "Luiz Felipe - Designer UX/UI",
        github: "https://github.com/LuizFelipeMatheus",
        linkedin: "https://www.linkedin.com/in/luiz-felipe-matheus-da-silva-4b6ab935a/"
    },
    {
        id: 3,
        name: "Maria Eduarda",
        position: "Desenvolvedora Back-end",
        photo: "https://github.com/mariadelpadre.png",
        alt: "Maria Eduarda - Desenvolvedora Back-end",
        github: "https://github.com/mariadelpadre",
        linkedin: "https://www.linkedin.com/in/maria-eduarda-del-padre-695023251/"
    },
    {
        id: 4,
        name: "Raí Capinan",
        position: "Desenvolvedor Full-stack",
        photo: "https://github.com/rai1capinan.png",
        alt: "Raí Capinan - Desenvolvedor Full-stack",
        github: "https://github.com/rai1capinan",
        linkedin: "https://www.linkedin.com/in/ra%C3%AD-capinan-5b3a86264/"
    },
];