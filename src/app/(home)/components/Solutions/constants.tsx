import type { TSolutionsSection } from "./types";

export const solutions: TSolutionsSection[] = [
	{
		id: "paraVoce",
		name: "Para você",
		items: [
			{
				icon: "material-symbols:rocket-launch-rounded",
				title: "Desenvolvimento Pessoal",
				content: "Desenvolvimento com Coaching Executivo Individual",
				detach: false,
			},
			{
				icon: "material-symbols:co-present",
				title: "Mentoria",
				content: "Mentoria em Desenvolvimento Humano e Organizacional",
				detach: true,
			},
			{
				icon: "ph:puzzle-piece-fill",
				title: "Assessment",
				content:
					"Assessment Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II",
				detach: false,
			},
			{
				icon: "ph:backpack-fill",
				title: "Trilha Profissional",
				content: "Coaching para trilhas e papéis profissionais",
				detach: false,
			},
		],
	},
	{
		id: "paraSuaEmpresa",
		name: "Para sua empresa",
		colors: {
			border: "border-cyan-300",
			detach: "bg-cyan-300",
			icon: "bg-cyan-600",
		},
		items: [
			{
				icon: "ph:briefcase-metal-fill",
				title: "Coaching Executivo",
				content: "Individual e de Equipes de Líderes (C-Level)",
				detach: false,
			},
			{
				icon: "ph:medal-military-fill",
				title: "Co-criando Organizações Saudáveis I e II ",
				content:
					"Programas autorais da Co-criar, com abordagens e técnicas fundamentadas para cultivo de engajamento, equilíbrio e bem-estar  para pessoas e negócios.",
				detach: false,
			},
			{
				icon: "ph:trophy-fill",
				title: "Desenvolvimento de Liderança",
				content:
					"Desenvolvimento através dos Níveis de Liderança. Programas cocriados e customizados para Desenvolvimento de Lideranças e Equipes",
				detach: true,
			},
			{
				icon: "ph:users-three-fill",
				title: "Assessment Comportamentais",
				content:
					" Assessment Estados Positivos no Trabalho,Tipos Psicológicos e Preferências de Personalidade MBTI Step I e II",
				detach: false,
			},
		],
	},
];
