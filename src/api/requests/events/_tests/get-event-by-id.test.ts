import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { getEventById } from "../get-event-by-id";

vi.mock("@/api", () => ({
	api: {
		get: vi.fn(),
	},
}));

describe("getEventById", () => {
	const id = "123";

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.get with correct URL", async () => {
		const mockResponse = { data: { id, title: "Test Event" } };
		(api.get as Mock).mockResolvedValueOnce(mockResponse);
		const result = await getEventById({ id });
		expect(api.get).toHaveBeenCalledWith(`/events/${id}`);
		expect(result).toEqual(mockResponse.data);
	});
});
