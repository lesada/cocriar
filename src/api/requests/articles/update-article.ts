import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

type UpdateArticleParams = {
	id: string;
	title: string;
	image_url: string | null;
	category: string;
	content: string;
};

export async function updateArticle({
	id,
	title,
	image_url,
	category,
	content,
}: UpdateArticleParams) {
	try {
		await api.patch(`${API_ROUTES.ARTICLES}/${id}`, {
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
