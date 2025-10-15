import { eventsMock } from "@/api/requests/events/mock";
import { http, HttpResponse } from "msw";

export const eventsMockHandler = [
	http.get("/events", () => {
		return HttpResponse.json(eventsMock, { status: 200 });
	}),

	http.get("/events/:id", (req) => {
		const { id } = req.params;
		const event = eventsMock.events.find((a) => a.id === id);
		if (event) {
			return HttpResponse.json(event);
		}
		return HttpResponse.json({ message: "Event not found" }, { status: 404 });
	}),

	http.delete("/events/:id", (req) => {
		const { id } = req.params;
		const index = eventsMock.events.findIndex((a) => a.id === id);
		if (index !== -1) {
			eventsMock.events.splice(index, 1);
			return HttpResponse.json({ message: "Event deleted" });
		}
		return HttpResponse.json({ message: "Event not found" }, { status: 404 });
	}),
];
