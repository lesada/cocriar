import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { getArticles } from "../get-articles";

vi.mock("@/api", () => ({
	api: {
		get: vi.fn(),
	},
}));

describe("getArticles", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.get with correct URL", async () => {
		const mockResponse = { data: [{ id: "1", title: "Article 1" }] };
		(api.get as Mock).mockResolvedValueOnce(mockResponse);
		const result = await getArticles();
		expect(api.get).toHaveBeenCalledWith("/articles", {
			params: {
				category: undefined,
				limit: undefined,
			},
		});
		expect(result).toEqual(mockResponse.data);
	});

	it("should throw and log error if api.get fails", async () => {
		const error = new Error("Network error");
		(api.get as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(getArticles()).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error fetching articles:", error);
		consoleSpy.mockRestore();
	});
});
