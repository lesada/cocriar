import { TSolutionsSection } from "./types";

export const solutions: TSolutionsSection[] = [
  {
    name: "Para você",
    items: [
      {
        icon: "rocket",
        title: "Desenvolvimento Pessoal",
        content: "Desenvolvimento com Coaching Executivo Individual",
        detach: false,
      },
      {
        icon: "presentation",
        title: "Mentoria",
        content: "Mentoria em Desenvolvimento Humano e Organizacional",
        detach: true,
      },
      {
        icon: "puzzle",
        title: "Assessment",
        content:
          "Assessment Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II",
        detach: false,
      },
      {
        icon: "backpack",
        title: "Trilha Profissional",
        content: "Coaching para trilhas e papéis profissionais",
        detach: false,
      },
    ],
  },
  {
    name: "Para sua empresa",
    colors: {
      border: "border-cyan-300",
      detach: "bg-cyan-300",
      icon: "bg-cyan-600",
    },
    items: [
      {
        icon: "briefcase",
        title: "Coaching Executivo",
        content: "Individual e de Equipes de Líderes (C-Level)",
        detach: false,
      },
      {
        icon: "medal",
        title: "Co-criando Organizações Saudáveis I e II ",
        content:
          "Programas autorais da Co-criar, com abordagens e técnicas fundamentadas para cultivo de engajamento, equilíbrio e bem-estar  para pessoas e negócios.",
        detach: false,
      },
      {
        icon: "trophy",
        title: "Desenvolvimento de Liderança",
        content:
          "Desenvolvimento através dos Níveis de Liderança. Programas cocriados e customizados para Desenvolvimento de Lideranças e Equipes",
        detach: true,
      },
      {
        icon: "users",
        title: "Assessment Comportamentais",
        content:
          " Assessment Estados Positivos no Trabalho,Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II",
        detach: false,
      },
    ],
  },
];
