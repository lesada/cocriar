import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { updateEvent } from "../update-event";

vi.mock("@/api", () => ({
	api: {
		patch: vi.fn(),
	},
}));

describe("updateEvent", () => {
	const params = {
		id: "123",
		title: "Updated Title",
		image_url: "http://example.com/image.png",
		content: "Updated content",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.patch with correct URL and payload", async () => {
		(api.patch as Mock).mockResolvedValueOnce({});
		await updateEvent(params);
		expect(api.patch).toHaveBeenCalledWith(`/events/${params.id}`, {
			content: params.content,
			image_url: params.image_url,
			title: params.title,
			max_participants: undefined,
			address: undefined,
			event_date: undefined,
		});
	});

	it("should throw and log error if api.patch fails", async () => {
		const error = new Error("Network error");
		(api.patch as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(updateEvent(params)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error updating event:", error);
		consoleSpy.mockRestore();
	});
});
