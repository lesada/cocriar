import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetArticlesResponse } from "./types";

export async function getArticles() {
	const { data } = await api.get<GetArticlesResponse>(API_ROUTES.ARTICLES);
	return data;
}
