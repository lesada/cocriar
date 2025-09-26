type Article = {
	category: string;
	content: string;
	created_at: Date;
	id: string;
	image_url: string;
	title: string;
};

export type GetArticlesResponse = {
	articles: Article[];
};
