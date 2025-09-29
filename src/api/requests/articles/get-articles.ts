import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetArticlesResponse } from "./types";

export async function getArticles() {
	try {
		const { data } = await api.get<GetArticlesResponse>(API_ROUTES.ARTICLES);
		return data;
	} catch (error) {
		console.error("Error fetching articles:", error);
		throw error;
	}
}
