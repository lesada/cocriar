import { articlesMock } from "@/api/requests/articles/mock";
import { http, HttpResponse } from "msw";

export const articlesMockHandler = [
	http.get("/articles", () => {
		return HttpResponse.json(articlesMock, { status: 200 });
	}),

	http.get("/articles/:id", (req) => {
		const { id } = req.params;
		const article = articlesMock.articles.find((a) => a.id === id);
		if (article) {
			return HttpResponse.json(article);
		}
		return HttpResponse.json({ message: "Article not found" }, { status: 404 });
	}),

	http.delete("/articles/:id", (req) => {
		const { id } = req.params;
		const index = articlesMock.articles.findIndex((a) => a.id === id);
		if (index !== -1) {
			articlesMock.articles.splice(index, 1);
			return HttpResponse.json({ message: "Article deleted" });
		}
		return HttpResponse.json({ message: "Article not found" }, { status: 404 });
	}),
];
