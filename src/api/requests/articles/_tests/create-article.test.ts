import { api } from "@/api";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { createArticle } from "../create-article";

vi.mock("@/api", () => ({
	api: {
		put: vi.fn(),
	},
}));

vi.mock("@/api/routes", () => ({
	API_ROUTES: {
		ARTICLES: "/articles",
	},
}));

describe("createArticle", () => {
	const params = {
		title: "Test Title",
		image_url: "http://example.com/image.png",
		category: "Tech",
		content: "Test content",
	};

	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should call api.put with correct URL and payload", async () => {
		(api.put as Mock).mockResolvedValueOnce({});
		await createArticle(params);
		expect(api.put).toHaveBeenCalledWith("/articles/", params);
	});

	it("should throw and log error if api.put fails", async () => {
		const error = new Error("Network error");
		(api.put as Mock).mockRejectedValueOnce(error);
		const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
		await expect(createArticle(params)).rejects.toThrow(error);
		expect(consoleSpy).toHaveBeenCalledWith("Error updating article:", error);
		consoleSpy.mockRestore();
	});
});
