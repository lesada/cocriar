import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetArticlesResponse } from "./types";

type GetArticlesParams = {
	category?: string | null;
	limit?: number | null;
};

export async function getArticles(params: GetArticlesParams = {}) {
	const { category, limit } = params;

	try {
		const { data } = await api.get<GetArticlesResponse>(API_ROUTES.ARTICLES, {
			params: {
				category,
				limit,
			},
		});
		return data;
	} catch (error) {
		console.error("Error fetching articles:", error);
		throw error;
	}
}
