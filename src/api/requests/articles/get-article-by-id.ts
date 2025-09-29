import { api } from "../..";
import { API_ROUTES } from "../../routes";
import type { GetArticleResponse } from "./types";

type GetArticleByIdParams = {
	id: string;
};

export async function getArticleById({ id }: GetArticleByIdParams) {
	const { data } = await api.get<GetArticleResponse>(
		API_ROUTES.ARTICLE.replace(":id", id),
	);
	return data;
}
