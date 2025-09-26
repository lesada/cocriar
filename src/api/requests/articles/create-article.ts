import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

type CreateArticleParams = {
	title: string;
	image_url: string | null;
	category: string;
	content: string;
};

export async function createArticle({
	title,
	image_url,
	category,
	content,
}: CreateArticleParams) {
	try {
		await api.put(`${API_ROUTES.ARTICLES}/`, {
			title,
			image_url,
			category,
			content,
		});
	} catch (error) {
		console.error("Error updating article:", error);
		throw error;
	}
}
