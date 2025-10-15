import { summaryMock } from "@/api/requests/summary/mock";
import { http, HttpResponse } from "msw";
import { articlesMockHandler } from "./articles";
import { eventsMockHandler } from "./events";

export const handlers = [
	http.get("/summary", () => {
		return HttpResponse.json(summaryMock);
	}),

	...articlesMockHandler,
	...eventsMockHandler,
];
