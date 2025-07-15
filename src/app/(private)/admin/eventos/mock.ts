export type TEvents = {
	id: number;
	title: string;
	category: string;
	tags: string[];
	publishedAt: string;
};

export const mockEvents: TEvents[] = [
	{
		id: 1,
		title: "A Revolução da Inteligência Artificial",
		category: "Liderança",
		tags: ["Tecnologia", "Futuro"],
		publishedAt: "2023-11-26",
	},
	{
		id: 2,
		title: "Como liderar equipes em tempos de mudança",
		category: "Liderança",
		tags: ["Gestão", "Mudança"],
		publishedAt: "2023-10-15",
	},
	{
		id: 3,
		title: "O impacto da IA na educação",
		category: "Educação",
		tags: ["IA", "Ensino"],
		publishedAt: "2023-09-08",
	},
	{
		id: 4,
		title: "Tendências de liderança para 2025",
		category: "Liderança",
		tags: [],
		publishedAt: "2023-11-26",
	},
	{
		id: 5,
		title: "Transformação digital nas empresas",
		category: "Negócios",
		tags: ["Digital", "Empresas"],
		publishedAt: "2023-07-21",
	},
];
