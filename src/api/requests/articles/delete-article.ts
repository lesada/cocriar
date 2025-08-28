import { api } from "@/api";
import { API_ROUTES } from "@/api/routes";

export async function deleteArticle(articleId: string) {
	try {
		await api.delete(`${API_ROUTES.ARTICLES}/${articleId}`);
	} catch (error) {
		console.error("Error deleting article:", error);
		throw error;
	}
}
