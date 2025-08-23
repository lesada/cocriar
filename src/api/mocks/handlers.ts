import { http, HttpResponse } from "msw";

const ROOT_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const handlers = [
	http.get("http://localhost:3000/summary", () => {
		console.log("Mocked /summary");
		return HttpResponse.json({ events: 11, articles: 17, testimonials: 0 });
	}),
];
