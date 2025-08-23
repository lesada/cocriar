import { summaryMock } from "@/api/summary/mock";
import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("http://localhost:3333/summary", () => {
		return HttpResponse.json(summaryMock);
	}),
];
