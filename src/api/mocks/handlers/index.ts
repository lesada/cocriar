import { summaryMock } from "@/api/requests/summary/mock";
import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/summary", () => {
		return HttpResponse.json(summaryMock);
	}),
];
