import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { deleteEvent } from "../delete-event";

vi.mock("@/api", () => ({
	api: {
		delete: vi.fn(),
	},
}));

describe("deleteEvent", () => {
	const id = "123";

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.delete with correct URL", async () => {
		(api.delete as Mock).mockResolvedValueOnce({});
		await deleteEvent(id);
		expect(api.delete).toHaveBeenCalledWith(`/events/${id}`);
	});

	it("should throw and log error if api.delete fails", async () => {
		const error = new Error("Network error");
		(api.delete as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(deleteEvent(id)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error deleting event:", error);
		consoleSpy.mockRestore();
	});
});
