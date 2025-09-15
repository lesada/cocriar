import { articlesMock } from "@/api/requests/articles/mock";
import { summaryMock } from "@/api/requests/summary/mock";
import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/summary", () => {
		return HttpResponse.json(summaryMock);
	}),

	http.get("/articles", () => {
		return HttpResponse.json(articlesMock);
	}),
];
