import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { createEvent } from "../create-event";

vi.mock("@/api", () => ({
	api: {
		post: vi.fn(),
	},
}));

vi.mock("@/api/routes", () => ({
	API_ROUTES: {
		EVENTS: "/events",
	},
}));

describe("createEvent", () => {
	const params = {
		title: "Test Title",
		image_url: "http://example.com/image.png",
		content: "Test content",
		event_date: new Date(),
		address: "123 Test St",
		max_participants: 100,
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.post with correct URL and payload", async () => {
		(api.post as Mock).mockResolvedValueOnce({});
		await createEvent(params);
		expect(api.post).toHaveBeenCalledWith("/events/", params);
	});

	it("should throw and log error if api.post fails", async () => {
		const error = new Error("Network error");
		(api.post as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(createEvent(params)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error updating event:", error);
		consoleSpy.mockRestore();
	});
});
